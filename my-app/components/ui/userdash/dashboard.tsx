import React, { useState } from 'react';
// Import your UI components
import { Textarea } from '../textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '../button';
// Import the custom hook
import { useInvokeBedrockModel } from '@/hooks/useLLM';


function Dashboard({ user }: { user: any }) {
  const [prompt, setPrompt] = useState(''); // State to hold the textarea input

  // Initialize the hook
  const { data, error, isLoading, invokeModel } = useInvokeBedrockModel();

  // Function to update state with the textarea input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  // Updated function to handle the button click using the hook
  const handleSubmit = async () => {
    await invokeModel(prompt);
  };
  
  const handleClear = () => {
    setPrompt('');
    
  }


  return (
    <div
        className="relative bg-no-repeat bg-cover bg-center h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80')",
        }}
      >
        <div className='w-1/2 flex flex-col justify-center items-center'>
        <Tabs defaultValue="account" className="w-[400px] m-5">
  <TabsList>
    <TabsTrigger value="account">My Agent</TabsTrigger>
    <TabsTrigger value="password">Knowledge</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Textarea 
      placeholder="What's on your mind?" 
      value={prompt} // Control the Textarea with state
      onChange={handleInputChange} // Update state on change
    />
    <Button onClick={handleSubmit}>Submit</Button>
    <Button onClick={handleClear}>Clear</Button>
    {/* Displaying the API response or error */}
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && <div>Response: {JSON.stringify(data)}</div>}
  </TabsContent>
  <TabsContent value="password">Knowledge refers to data your agent can reference when answering questions and completing tasks - CSV only, maximum 10 documents per agent.</TabsContent>
</Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
