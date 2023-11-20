import type { DataSettingsToAdd, SettingsAllData } from "~/shared/models/settings";
import { prisma } from "./database.server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Prisma } from "@prisma/client";
import { USER_ID } from "~/shared/utils/constants";

export async function getDataSettingsByUserId(userId: string) {
  try {
    const data = await prisma.dataSettings.findFirst({
      where: {
        userId: userId
      }
    });
    return data;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getDataSettingsByUserId(): ', JSON.stringify(error));
    throw new Error(`Data Settings could not be retrieved. Code: ${error.code}`);
  }
}

export async function addDataSettings(item: DataSettingsToAdd) {
  try {
    const res = await prisma.dataSettings.create({
      data: {
        addAnotherAfterSubmit: item.addAnotherAfterSubmit,
        userId: item.userId,
        defaultAccountIdToAdd: item.defaultAccountIdToAdd,
        dashboardCount: item.dashboardCount,
        showDashboardChart: item.showDashboardChart ?? false
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at addDataSettings(): ', JSON.stringify(error));
    if (error.code === 'P2002') {
      throw new Error(`Data Settings for user '${item.userId}' already exists.`);
    }
    throw new Error(`Data Settings for user ${item.userId} could not be added. Code: ${error.code}`);
  }

}

export async function updateDataSettings(item: SettingsAllData) {
  try {
    const res = await prisma.dataSettings.update({
      where: {
        userId: USER_ID
      },
      data: {
        ...item
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at updateDataSettings(): ', JSON.stringify(error));
    throw new Error(`Data Settings for user ${USER_ID} could not be updated. Code: ${error.code}`);
  }
}