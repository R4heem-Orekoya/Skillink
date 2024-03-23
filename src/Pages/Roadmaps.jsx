import Gobackbtn from "@/components/Gobackbtn"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import useFetch from "@/hooks/use-fetch"
import { ArrowDownToLine } from 'lucide-react'
import { sortByCreatedAt } from "@/lib/utils"


const Roadmaps = () => {
  const { data, setData, loading, error } = useFetch(`*[_type == 'roadmaps']`)
  let sortedData
  if(data) {
    console.log(data);
    sortedData = sortByCreatedAt(data)
  }
  
  return (
    <>
      <section className='text-zinc-900 max-w-2xl mx-auto text-center mb-10'>
        <h2 className='text-2xl sm:text-3xl font-semibold text-primary'>Developer Roadmaps</h2>
        <p className='text-muted-foreground py-6 text-sm md:text-lg'>
          Roadmaps, guides and other educational content 
          to help guide developers in picking up a path 
          and guide their learnings.
        </p>
        <Gobackbtn />
      </section>
      
      <section className="py-10 max-w-2xl mx-auto">
        <div className="relative flex flex-col items-center justify-center ">
          <Badge variant='outline' className='z-10 relative bg-white'>Role based Roadmaps</Badge>
          <Separator className='absolute'/>
        </div>
        
        {loading && <p className="text-center mt-6">Loading ...</p>}
        {error && <p className="text-center mt-6 text-red-400">{error.message}</p>}
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-10">
          {data && sortedData.filter(dt => dt.tag === 'role-based').map((dt, i) => (
            <Card key={i} className="col-span-1 flex items-center py-3 px-2 rounded-lg">
              <CardContent className='p-0 flex flex-1 items-center justify-between'>
                <p className="text-xs">{dt.title}</p>
                <a href={dt.linlk} download><ArrowDownToLine className="h-3 flex-shrink-0"/></a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    
      
      <section className="py-10 max-w-2xl mx-auto">
        <div className="relative flex flex-col items-center justify-center ">
          <Badge variant='outline' className='z-10 relative bg-white'>Skill based Roadmaps</Badge>
          <Separator className='absolute'/>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-10">
          
        {data && sortedData.filter(dt => dt.tag === 'skill-based').map((dt, i) => (
            <Card key={i} className="col-span-1 flex items-center py-3 px-2 rounded-lg">
              <CardContent className='p-0 flex flex-1 items-center justify-between'>
                <p className="text-xs">{dt.title}</p>
                <a href={dt.linlk} download><ArrowDownToLine className="h-3 flex-shrink-0"/></a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* <section className="py-10 max-w-2xl mx-auto">
        <div className="relative flex flex-col items-center justify-center ">
          <Badge variant='outline' className='z-10 relative bg-white'>Best Practices</Badge>
          <Separator className='absolute'/>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-10">
          <Card className="col-span-1 flex items-center py-3 px-2 rounded-lg">
            <CardContent className='p-0 flex flex-1 items-center justify-between'>
              <p className="text-xs">Frontend Performance</p>
              <a href="#" download><ArrowDownToLine className="h-3 flex-shrink-0"/></a>
            </CardContent>
          </Card>
          <Card className="col-span-1 flex items-center py-3 px-2 rounded-lg">
            <CardContent className='p-0 flex flex-1 items-center justify-between'>
              <p className="text-xs">API Security</p>
              <a href="#" download><ArrowDownToLine className="h-3 flex-shrink-0"/></a>
            </CardContent>
          </Card>
          <Card className="col-span-1 flex items-center py-3 px-2 rounded-lg">
            <CardContent className='p-0 flex flex-1 items-center justify-between'>
              <p className="text-xs">Code Reviews</p>
              <a href="#" download><ArrowDownToLine className="h-3 flex-shrink-0"/></a>
            </CardContent>
          </Card>
          <Card className="col-span-1 flex items-center py-3 px-2 rounded-lg">
            <CardContent className='p-0 flex flex-1 items-center justify-between'>
              <p className="text-xs">AWS</p>
              <a href="#" download><ArrowDownToLine className="h-3 flex-shrink-0"/></a>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </>
  )
}

export default Roadmaps
