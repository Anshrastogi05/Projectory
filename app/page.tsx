import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <h1>Share what You've Built</h1>
      <h1>Learn from the Real-Work</h1>
      <p> Showcase your projects, ai/ml application, apps, saas website, extensions and many more.</p>
      <p>learn from real-world work and update your resume.</p>
      <Image
        src="/home-illustration.png"
        alt="Illustration of people collaborating on projects"
        width={600}
        height={400}
      />
    </div>
  );
}
