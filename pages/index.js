import Subscribe from "@/components/shared/subscribe";
import PagesMetaHead from "@/components/PagesMetaHead";
import Ofinterest from "@/components/home/Ofinterest";
import Whoweare from "@/components/home/Whoweare";
export default function Home() {
  return (
    <div className="mx-auto">
      <PagesMetaHead title="Home" />
      <Ofinterest />
      <Whoweare />
      <Subscribe bgColor={"#245073"} opacity={0.5} />
    </div>
  );
}
