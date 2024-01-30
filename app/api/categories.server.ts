import { ITEMS_PER_PAGE } from "~/shared/utils/constants";
import { prisma } from "./database.server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Prisma } from "@prisma/client";
import type { CategoryAddable, CategoryEditable } from "~/shared/models/category.model";

export async function addCategory(item: CategoryAddable) {
  try {
    const res = await prisma.category.create({
      data: {
        name: item.name,
        shown: (item.shown !== undefined && item.shown !== null) ? Boolean(item.shown) : true,
      },
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at addCategory(): ', JSON.stringify(error));
    if (error.code === 'P2002') {
      throw new Error(`Category name '${item.name}' already exists.`);
    }
    throw new Error(`Category name ${item.name} could not be added. Code: ${error.code}`);
  }
}

export async function editCategory(item: CategoryEditable) {
  const toEdit = {
    name: item.name,
    shown: (item.shown !== undefined && item.shown !== null) ? Boolean(item.shown) : true,
  };

  try {
    const res = await prisma.category.update({
      where: {
        id: item.id
      },
      data: {
        ...toEdit
      },
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at EditCategory(): ', JSON.stringify(error));
    if (error.code === 'P2002') {
      throw new Error(`Category name '${item.name}' already exists.`);
    }
    throw new Error(`Category name ${item.name} could not be edited. Code: ${error.code}`);
  }
}

export async function deleteCategory(id: string) {
  try {
    const res = await prisma.category.delete({
      where: {
        id: id
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at deleteCategory(): ', JSON.stringify(error));
    throw new Error(`Category could not be deleted. Code: ${error.code}`);
  }
}

export async function getCategoriesPaged(page: number, filterString: string | null) {
  const pageSize = ITEMS_PER_PAGE;
  const offset = page * pageSize;
  const totalCount: number = await prisma.category.count();
  const filter = (filterString !== null) ? filterString.trim() : '';

  try {
    const res = await prisma.category.findMany({
      orderBy: {
        name: 'asc'
      },
      skip: offset,
      take: pageSize,
      where: {
        name: {
          contains: filter,
          mode: 'insensitive'
        }
      },
      include: {
        _count: {
          select: { accounts: true }
        },
        accounts: {
          orderBy: {
            name: 'asc'
          },
        },
        comments: true
      }
    });

    const currentResultSetCount: number = await prisma.category.count({
      where: {
        name: {
          contains: filter,
          mode: 'insensitive'
        }
      }
    });

    const totalPages: number = Math.ceil(currentResultSetCount / pageSize);

    return {
      data: res,
      totalPages: totalPages,
      totalCount: totalCount,
      currentResultSetCount: currentResultSetCount,
      pageSize: pageSize
    };
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getCategoriesPaged(): ', JSON.stringify(error));
    throw new Error(`Categories could not be retrieved. Code: ${error.code}`);
  }
}