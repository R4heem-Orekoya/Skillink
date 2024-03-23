import Gobackbtn from '@/components/Gobackbtn'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import useFetch from "@/hooks/use-fetch"
import { useToast } from '@/components/ui/use-toast'
import { sortByCreatedAt } from '@/lib/utils'
import ReactPlayer from 'react-player/youtube'


const Youtube = () => {
   const { toast } = useToast()
   const { data, setData, loading, error } = useFetch(`*[_type == 'YT-Videos']`)
   let sortedData
   if(data) {
     console.log(data);
     sortedData = sortByCreatedAt(data)
   }
   
   const toastNotification = () => {
      toast({
         title: "Yay, you clicked a button!!",
         description: "The buttons don't work yet, the site is still in development. 😜",      })
   }
   
  return (
      <>
         <section className='text-zinc-900 max-w-2xl mx-auto text-center mb-10'>
            <h2 className='text-2xl sm:text-3xl font-semibold text-primary'>YouTube Videos</h2>
            <p className='text-muted-foreground py-6 text-sm md:text-lg'>
               Dive deeper into development topics with our curated collection of YouTube videos! 
            </p>
            <Gobackbtn />
         </section>
         
         <section className='max-w-4xl mx-auto py-10'>
            <div className='max-w-2xl mx-auto flex justify-center gap-4 flex-wrap'>
               <Button onClick={toastNotification} size='sm'>All</Button>
               <Button onClick={toastNotification} size='sm' variant='outline'>Frontend</Button>
               <Button onClick={toastNotification} size='sm' variant='outline'>Backend</Button>
               <Button onClick={toastNotification} size='sm' variant='outline'>Fullstack</Button>
               <Button onClick={toastNotification} size='sm' variant='outline'>Mobile</Button>
               <Button onClick={toastNotification} size='sm' variant='outline'>Game</Button>
               <Button onClick={toastNotification} size='sm' variant='outline'>AI</Button>
            </div>
            
            {loading && <p className="text-center mt-6">Loading ...</p>}
            {error && <p className="text-center mt-6 text-red-400">{error.message}</p>}
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
               {
                  data && data.map((dt, i) => (
                     <Card className='p-3 duration-300 rounded-lg'>
                        <div className='w-full aspect-video rounded-sm overflow-hidden'>
                           <ReactPlayer url={dt.link} width='100%' height='100%'/>
                        </div>
                        <CardTitle className='text-lg my-2 line-clamp-2'>
                           <a href={dt.link} target='_blank'>{dt.title}</a>
                        </CardTitle>
                        <CardDescription className='line-clamp-2'>
                           {dt.excerpt}
                        </CardDescription>
                        <CardFooter className='p-0 pt-3'>
                           <Badge variant='secondary' className='text-[10px] font-semibold'>{dt.tag}</Badge>
                        </CardFooter>
                     </Card> 
                  ))
               }
            </div>
         </section>
      </>
   )
}

export default Youtube