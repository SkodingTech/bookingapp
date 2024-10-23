"use client";
import { sessionState } from "./utils/session";
import {sessionRole } from './utils/role'

const useHasAccess = (permission: string) => {
  // Assuming sessionState is your custom session object
  const session = sessionState;
  const userRole = sessionRole


  // If sessionState is false, the user is not logged in
  if (!session && !userRole || !session) {
    return false;
  }

  // Check if the user has the specific permission
  if (userRole.role?.includes(permission)) {
    return true;
  }

  // Extract the entity part of the permission (e.g., "products" from "products.list")
  const entity = permission.split(".")[0];

  // Check if the user has 'all' permissions for the entity (e.g., "products.all")
  if (userRole.role?.includes(`${entity}.all`)) {
    return true;
  }

  // If neither specific nor all permissions are found, return false
  return false;
};

export default useHasAccess;
