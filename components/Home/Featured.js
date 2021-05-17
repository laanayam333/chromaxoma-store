import Image from 'next/image';

const Featured = ({ featured }) => {
  return (
    <section>
      {featured.map((print) => (
        <div key={print.title}>
          <h2>{print.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default Featured;
