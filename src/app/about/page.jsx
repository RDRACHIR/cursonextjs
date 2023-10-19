"use client";
import { useRouter } from "next/navigation";

const metadata = {
  title: "About Us",
};

export default function About() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        facilis voluptatem, est, eos voluptatum eveniet ad eius nihil sapiente
        sunt dolore fugiat quidem in sequi tempore tempora vitae possimus
        laborum! Consequatur minus ea quia? A, quasi eligendi ad dolorem
        quibusdam expedita nisi dignissimos illo, suscipit, officia sapiente
        ducimus non explicabo voluptate itaque tenetur incidunt in laudantium
        ipsam vel sequi. Alias natus accusamus voluptas, et dignissimos dicta
        placeat porro officia id, ex, veritatis nulla inventore. Animi adipisci
        modi, ad voluptatibus vero beatae asperiores eos aspernatur architecto
        rerum quam dolores quisquam, odit aliquam! Perferendis, magnam at
        doloribus eos ut sequi saepe itaque?
      </p>

      <button
        className="bg-sky-400 px-3 py-2"
        onClick={() => {
          alert("Executing code!!!");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}
