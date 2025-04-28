import { cn } from "@/lib/utils";

export default function TestComponent() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold">Heading 1</h1>
      <h2 className="text-2xl md:text-4xl font-bold">Heading 2</h2>
      <p className="text-base">Normal paragraph text</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-white/10 rounded-md" style={{ backgroundColor: "#0F0F0F" }}>
          <p className="font-mono text-white">Basic Box</p>
        </div>
        <div className="p-4 rounded-md text-black" style={{ backgroundColor: "#35FFBE" }}>
          <p className="font-mono">Accent Box</p>
        </div>
        <div className="p-4 border rounded-md" 
          style={{ 
            backgroundColor: "#0F0F0F", 
            borderColor: "#35FFBE",
            color: "#5CFFC8"
          }}
        >
          <p className="font-mono">Accent Border & Text</p>
        </div>
      </div>
      
      <button 
        className={cn(
          "px-4 py-2 rounded-md font-mono border transition-colors",
        )}
        style={{ 
          backgroundColor: "#0F0F0F", 
          color: "#F5F5F5",
          borderColor: "#35FFBE"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#35FFBE";
          e.currentTarget.style.color = "#0F0F0F";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#0F0F0F";
          e.currentTarget.style.color = "#F5F5F5";
        }}
      >
        Test Button
      </button>
    </div>
  );
} 