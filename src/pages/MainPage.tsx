import { useMainPage } from "@/hooks";

export default function MainPage() {
  const { example } = useMainPage();

  return (
    <div className="p-2 flex items-center justify-center flex-col">
      <h3>Example</h3>
      <div className="w-fit">
        {example.data?.map((data) => (
          <div key={data.id} className="p-2 my-1 border">
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
