import type { DashboardChartType } from "@prisma/client";
import type { Account } from "./account.model";

export interface DataSettingsToAdd {
  userId: string;
  addAnotherAfterSubmit: boolean;
  defaultAccountIdToAdd: string;
  showDashboardChart?: boolean;
  dashboardChartType?: DashboardChartType;
  dashboardCount: number;
}

export interface DataSettingsToUpdate {
  addAnotherAfterSubmit?: boolean;
  defaultAccountIdToAdd?: string;
}

export interface DataSettings {
  id: string;
  userId: string;
  addAnotherAfterSubmit: boolean;
  defaultAccountIdToAdd: string;
  showDashboardChart: boolean;
  dashboardChartType: DashboardChartType;
  dashboardCount: number;
  dateAdded: Date | string;
  updatedAt: Date | string | null;
}

export interface DataSettingsForm {
  addAnotherAfterSubmit?: boolean;
  account?: Account | null;
}

export interface DashboardSettingsForm {
  showDashboardChart: boolean;
  dashboardChartType: DashboardChartType;
  dashboardCount: number;
}

export interface DashboardSettingsToUpdate {
  showDashboardChart: boolean;
  dashboardCount: number;
  dashboardChartType: DashboardChartType;
}

export interface SettingsAllData {
  addAnotherAfterSubmit?: boolean;
  defaultAccountIdToAdd?: string;
  showDashboardChart?: boolean;
  dashboardCount?: number;
  dashboardChartType?: DashboardChartType;
}
