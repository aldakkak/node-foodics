module.exports = [
  {
    name: "Branches",
    path: "branches",
    methods: ["list", "get", "update"]
  },
  {
    name: "Categories",
    path: "categories",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "Cities",
    path: "cities",
    methods: ["list"]
  },
  {
    name: "Combos",
    path: "combos",
    methods: ["create"]
  },
  {
    name: "Countries",
    path: "countries",
    methods: ["list"]
  },
  {
    name: "Customers",
    path: "customers",
    methods: ["list", "get", "update", "create"],
    pagination: true,
    limit: 50
  },
  {
    name: "CustomerAddresses",
    path: "customer-addresses",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "DeliveryZones",
    path: "delivery-zones",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "Devices",
    path: "devices",
    methods: ["list", "get"]
  },
  {
    name: "Discounts",
    path: "discounts",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "FloorLocations",
    path: "floor-locations",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "FloorTables",
    path: "floor-tables",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryItemTags",
    path: "inventory-item-tags",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryItems",
    path: "inventory-items",
    methods: ["list", "get", "update", "create", "delete"]
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
    methods: ["list", "get"]
  },
  {
    name: "InventoryTransactions",
    path: "inventory-transactions",
    methods: ["list", "get", "create"]
  },
  {
    name: "Modifiers",
    path: "modifiers",
    methods: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "OrderTags",
    path: "order-tags",
    methods: ["list"]
  },
  {
    name: "Orders",
    path: "orders",
    methods: ["list", "get", "create", "update", "cancel"]
  },
  {
    name: "PaymentMethods",
    path: "payment-methods",
    methods: ["list", "get", "create", "update"]
  },
  {
    name: "ProductTags",
    path: "product-tags",
    methods: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "Products",
    path: "products",
    methods: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "PurchaseOrders",
    path: "purchase-orders",
    methods: ["list", "get", "create"]
  },
  {
    name: "CurrentBusiness",
    path: "current-business",
    methods: ["list"]
  },
  {
    name: "RestoreData",
    path: "restore-data",
    methods: ["list"]
  },
  {
    name: "Shifts",
    path: "shifts",
    methods: ["list"]
  },
  {
    name: "Suppliers",
    path: "suppliers",
    methods: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "Taxes",
    path: "taxes",
    methods: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "TimedEvents",
    path: "timed-events",
    methods: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "TillLogs",
    path: "till-logs",
    methods: ["list"]
  },
  {
    name: "TillOperations",
    path: "till-operations",
    methods: ["list"]
  },
  {
    name: "Users",
    path: "users",
    methods: ["list", "get", "create", "update"]
  },
  {
    name: "Warehouses",
    path: "warehouses",
    methods: ["list", "get"]
  }
];
