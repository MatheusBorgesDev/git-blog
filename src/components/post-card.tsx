export function PostCard() {
  return (
    <div className="flex h-64 w-full flex-col gap-5 rounded-lg bg-basePost p-8">
      <div className="flex gap-4">
        <h3 className="text-xl font-semibold text-baseTitle">
          JavaScript data types and data structures
        </h3>
        <span className="text-nowrap text-baseSpan">Há 1 dia</span>
      </div>

      <p className="overflow-hidden text-ellipsis text-baseText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        delectus voluptas error obcaecati ut incidunt velit cum itaque ratione
        voluptatum a, non beatae iste adipisci aliquid ex enim distinctio
        voluptates. Loremasdasdasdasdasd ipsum dolor sit, amet consectetur
        adipisicing elit. Laudantium dolores libero minus amet delectus ut aut
        obcaecati quaerat? Deserunt qui temporibus molestiae, enim cupiditate ab
        blanditiis necessitatibus recusandae itaque mollitia!
      </p>
    </div>
  );
}
