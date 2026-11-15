export interface Product {
  key: number,
  itemId: string,
  itemName: string,
  itemPrice: number,
  qty: number
}

export interface Request {
  id: string,
  requestDate: string,
  decisionDate: string,
  decidedBy: string,
  destributionRun: string,
  status: string,
  runStatus: string,
  note: string,
  warehouse: string,
  products: any[],
}

export const WARE_HOUSES = [
  {
    id: 1,
    name: "Colombo Central Warehouse"
  },
  {
    id: 2,
    name: "Kandy Regional Warehouse"
  },
  {
    id: 3,
    name: "Galle Regional Warehouse"
  }
]

export const MockProducts: Product[] = [
  {
    key: 1,
    itemId: "001",
    itemName: "Sugar",
    itemPrice: 200,
    qty: 1000
  },
  {
    key: 2,
    itemId: "002",
    itemName: "Milk Powder",
    itemPrice: 1050,
    qty: 200
  },
  {
    key: 3,
    itemId: "003",
    itemName: "Rice",
    itemPrice: 240,
    qty: 1500
  },
  {
    key: 4,
    itemId: "004",
    itemName: "Flour",
    itemPrice: 350,
    qty: 750
  },
  {
    key: 5,
    itemId: "005",
    itemName: "Water Bottle",
    itemPrice: 70,
    qty: 1200
  }
]

export const MockRequests: Request[] = [
  {
    id: "REQ-001",
    requestDate: "2026-10-20",
    decisionDate: "2026-10-21",
    decidedBy: "Nimal Perera",
    destributionRun: "RUN-101",
    status: "Approved",
    runStatus: "Completed",
    note: "Monthly restock for Colombo outlets.",
    warehouse: "Colombo Central Warehouse",
    products: [
      { name: "Sugar", sku: "001", requestedQty: 200, availableQty: 1000 },
      { name: "Rice", sku: "003", requestedQty: 300, availableQty: 1500 },
    ],
  },
  {
    id: "REQ-002",
    requestDate: "2026-10-22",
    decisionDate: "2026-10-23",
    decidedBy: "Kamal Silva",
    destributionRun: "RUN-102",
    status: "Approved",
    runStatus: "In Progress",
    note: "Urgent request for school canteens.",
    warehouse: "Kandy Regional Warehouse",
    products: [
      { name: "Milk Powder", sku: "002", requestedQty: 100, availableQty: 200 },
      { name: "Flour", sku: "004", requestedQty: 150, availableQty: 750 },
      { name: "Water Bottle", sku: "005", requestedQty: 400, availableQty: 1200 },
    ],
  },
  {
    id: "REQ-003",
    requestDate: "2026-10-24",
    decisionDate: "",
    decidedBy: "",
    destributionRun: "",
    status: "Pending",
    runStatus: "Not Started",
    note: "",
    warehouse: "Galle Regional Warehouse",
    products: [
      { name: "Rice", sku: "003", requestedQty: 500, availableQty: 1500 },
    ],
  },
  {
    id: "REQ-004",
    requestDate: "2026-10-25",
    decisionDate: "2026-10-26",
    decidedBy: "Nimal Perera",
    destributionRun: "",
    status: "Rejected",
    runStatus: "Not Started",
    note: "Requested quantity exceeds available stock.",
    warehouse: "Colombo Central Warehouse",
    products: [
      { name: "Milk Powder", sku: "002", requestedQty: 350, availableQty: 200 },
      { name: "Sugar", sku: "001", requestedQty: 100, availableQty: 1000 },
    ],
  },
  {
    id: "REQ-005",
    requestDate: "2026-10-26",
    decisionDate: "2026-10-27",
    decidedBy: "Kamal Silva",
    destributionRun: "RUN-103",
    status: "Approved",
    runStatus: "Scheduled",
    note: "Weekend event supplies.",
    warehouse: "Kandy Regional Warehouse",
    products: [
      { name: "Water Bottle", sku: "005", requestedQty: 600, availableQty: 1200 },
      { name: "Flour", sku: "004", requestedQty: 200, availableQty: 750 },
      { name: "Sugar", sku: "001", requestedQty: 250, availableQty: 1000 },
    ],
  },
];