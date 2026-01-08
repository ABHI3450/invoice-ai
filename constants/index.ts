export const navLinks = [
  {
    label: "Dashboard",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Process Invoice",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Compliance Check",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Fraud Detection",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Tax Reports",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Export Data",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "User Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Top Up Tokens",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Starter",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 10,
    inclusions: [
      {
        label: "10 Free Invoice Scans",
        isIncluded: true,
      },
      {
        label: "Basic AI Extraction",
        isIncluded: true,
      },
      {
        label: "Fraud Detection Agent",
        isIncluded: false,
      },
      {
        label: "Custom Tax Export",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Business",
    icon: "/assets/icons/free-plan.svg",
    price: 49,
    credits: 150,
    inclusions: [
      {
        label: "150 Invoice Scans",
        isIncluded: true,
      },
      {
        label: "Full Multi-Agent Access",
        isIncluded: true,
      },
      {
        label: "Priority Compliance Review",
        isIncluded: true,
      },
      {
        label: "API Access",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Enterprise",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "Unlimited Scans",
        isIncluded: true,
      },
      {
        label: "Dedicated Support",
        isIncluded: true,
      },
      {
        label: "Custom Compliance Logic",
        isIncluded: true,
      },
      {
        label: "24/7 Security Audit",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Process Invoice",
    subTitle: "Extract vendor details, amounts, and dates automatically",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Export Data",
    subTitle: "Download processed invoice data in CSV or PDF formats",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Compliance Check",
    subTitle: "Validate tax IDs and ZATCA/EU VAT compliance",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Fraud Detection",
    subTitle: "Scan for duplicate invoices or suspicious amounts",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Tax Reports",
    subTitle: "Analyze your spend breakdown by tax category",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square View",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Document Portrait",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Receipt Long",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;