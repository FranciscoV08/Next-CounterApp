import { redirect } from "../../node_modules/next/navigation";



export default function CounterPage() {

  redirect('/dashboard/main')
  
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}