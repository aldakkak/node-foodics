module.exports = [
  {
    name: "Branches",
    path: "branches",
    methods: ["featchAll","list", "get", "update"]
  },
  {
    name: "Categories",
    path: "categories",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "Cities",
    path: "cities",
    methods: ["featchAll","list"]
  },
  {
    name: "Combos",
    path: "combos",
    methods: ["create"]
  },
  {
    name: "Countries",
    path: "countries",
    methods: ["featchAll","list"]
  },
  {
    name: "Customers",
    path: "customers",
    methods: ["featchAll","list", "get", "update", "create"],
    pagination: true,
    limit: 50
  },
  {
    name: "CustomerAddresses",
    path: "customer-addresses",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "DeliveryZones",
    path: "delivery-zones",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "Devices",
    path: "devices",
    methods: ["featchAll","list", "get"]
  },
  {
    name: "Discounts",
    path: "discounts",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "FloorLocations",
    path: "floor-locations",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "FloorTables",
    path: "floor-tables",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryItemTags",
    path: "inventory-item-tags",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryItems",
    path: "inventory_items",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryLevels",
    path: "inventory_levels",
    methods: ["get"],
    parameters: ["branchId"]
  },
  {
    name: "InventorySnapshots",
    path: "inventory-snapshots",
    methods: ["featchAll","list", "get"]
  },
  {
    name: "InventoryTransactions",
    path: "inventory_transactions",
    methods: ["featchAll","list", "get", "create"]
  },
  {
    name: "Modifiers",
    path: "modifiers",
    methods: ["featchAll","list", "get", "update", "create", "delete"]
  },
  {
    name: "OrderTags",
    path: "order-tags",
    methods: ["featchAll","list"]
  },
  {
    name: "Orders",
    path: "orders",
    methods: ["featchAll","list", "get", "create", "update", "cancel"]
  },
  {
    name: "PaymentMethods",
    path: "payment-methods",
    methods: ["featchAll","list", "get", "create", "update"]
  },
  {
    name: "ProductTags",
    path: "product-tags",
    methods: ["featchAll","list", "get", "create", "update", "delete"]
  },
  {
    name: "Products",
    path: "products",
    methods: ["featchAll","list", "get", "create", "update", "delete"]
  },
  {
    name: "PurchaseOrders",
    path: "purchase-orders",
    methods: ["featchAll","list", "get", "create"]
  },
  {
    name: "CurrentBusiness",
    path: "current-business",
    methods: ["featchAll","list"]
  },
  {
    name: "RestoreData",
    path: "restore-data",
    methods: ["featchAll","list"]
  },
  {
    name: "Shifts",
    path: "shifts",
    methods: ["featchAll","list"]
  },
  {
    name: "Suppliers",
    path: "suppliers",
    methods: ["featchAll","list", "get", "create", "update", "delete"]
  },
  {
    name: "Taxes",
    path: "taxes",
    methods: ["featchAll","list", "get", "create", "update", "delete"]
  },
  {
    name: "TimedEvents",
    path: "timed-events",
    methods: ["featchAll","list", "get", "create", "update", "delete"]
  },
  {
    name: "TillLogs",
    path: "till-logs",
    methods: ["featchAll","list"]
  },
  {
    name: "TillOperations",
    path: "till-operations",
    methods: ["featchAll","list"]
  },
  {
    name: "Users",
    path: "users",
    methods: ["featchAll","list", "get", "create", "update"]
  },
  {
    name: "Warehouses",
    path: "warehouses",
    methods: ["featchAll","list", "get"]
  }
];
