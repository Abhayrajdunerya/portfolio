import RootLayoutProviders from "@/providers/root-layout-provider";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return <RootLayoutProviders>{children}</RootLayoutProviders>;
}
