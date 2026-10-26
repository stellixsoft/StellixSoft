export type Role = "Administrator" | "Customer" | "Technician";
export type TicketStatus = "Open" | "Assigned" | "Resolved";
export type Device = {
  id: string;
  tenant: string;
  site: string;
  name: string;
  status: "Online" | "Offline";
  temperature: number;
  ticket: TicketStatus | null;
};
export const initialDevices: Device[] = [
  {
    id: "RD-101",
    tenant: "Northstar",
    site: "Chicago",
    name: "Receiving RFID reader",
    status: "Online",
    temperature: 22,
    ticket: null,
  },
  {
    id: "SN-102",
    tenant: "Northstar",
    site: "Chicago",
    name: "Cold storage sensor",
    status: "Online",
    temperature: 4,
    ticket: null,
  },
  {
    id: "RD-201",
    tenant: "Northstar",
    site: "Austin",
    name: "Dispatch RFID reader",
    status: "Online",
    temperature: 24,
    ticket: null,
  },
  {
    id: "RD-301",
    tenant: "Meridian",
    site: "Rotterdam",
    name: "Dock RFID reader",
    status: "Online",
    temperature: 19,
    ticket: null,
  },
  {
    id: "SN-302",
    tenant: "Meridian",
    site: "Rotterdam",
    name: "Cold storage sensor",
    status: "Online",
    temperature: 3,
    ticket: null,
  },
];
export function visibleDevices(devices: Device[], role: Role, site: string) {
  return devices.filter(
    (d) =>
      (role === "Administrator" || d.tenant === "Northstar") &&
      (site === "All" || d.site === site),
  );
}
export function transitionDevice(
  device: Device,
  action: "fail" | "assign" | "resolve",
  role: Role,
): Device {
  if (role === "Customer") throw new Error("Customer role is read-only");
  if (role !== "Administrator" && device.tenant !== "Northstar")
    throw new Error("Outside assigned tenant");
  if (
    action === "fail" &&
    role === "Administrator" &&
    device.status === "Online"
  )
    return { ...device, status: "Offline", ticket: "Open" };
  if (action === "assign" && device.ticket === "Open")
    return { ...device, ticket: "Assigned" };
  if (action === "resolve" && device.ticket === "Assigned")
    return { ...device, status: "Online", ticket: "Resolved" };
  throw new Error("Invalid transition");
}
