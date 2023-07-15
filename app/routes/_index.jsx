import fs from 'fs';

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
    </div>
  );
}

export async function loader() {

  console.log(`\n\nloader run...`);
  console.log({ fs });  // <- use fs or any other nodejs packages
  console.log('\n\n');

  return null;
}
