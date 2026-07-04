import type { Certification } from "@/types";

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-csa",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    type: "Professional Level",
    iconName: "cloud",
    accentColor: "primary",
  },
  {
    id: "cka",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    type: "CNCF / Linux Foundation",
    iconName: "shield",
    accentColor: "secondary",
  },
  {
    id: "gcp-pca",
    title: "Google Cloud Architect",
    issuer: "Google Cloud Platform",
    type: "Professional Certification",
    iconName: "terminal",
    accentColor: "tertiary",
  },
];
