import { Badge } from "../components/ui/badge"
import { buttonVariants } from "../components/ui/button"
import { Youtube, GanttChartSquare, Hammer, LibrarySquare, Folders, Flame } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <main className="w-[min(1200px,90%)] mx-auto text-primary">
         <section className="max-w-2xl mx-auto text-center py-10">
         <h1 className="text-3xl lg:text-4xl font-semibold flex items-center justify-center gap-6">
            Skillink Resources
            <Badge className='text-[10px] rounded-full h-5 max-sm:hidden'>Beta</Badge>
         </h1>
         <p className="text-muted-foreground my-8 text-sm md:text-lg">
         ⏱️ Save time searching! Find the best developer resources - curated blog posts, informative YouTube videos & clear roadmaps.
         </p>
         <div className="flex gap-4 justify-center items-center flex-wrap max-sm:max-w-xs max-sm:px-6 mx-auto">
            <Link to='/yt-videos' className={buttonVariants({size: 'lg'})}>Browse YouTube Videos <Youtube className="ml-2" strokeWidth={1.6}/></Link>
            <Link to='/roadmaps' className={buttonVariants({variant: 'secondary', size: 'lg'})}>Browse Roadmaps <GanttChartSquare  className="ml-2" strokeWidth={1.6}/></Link>
         </div>
         </section>
      
         <section className="pt-5 pb-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to='/yt-videos'>
               <Card className='cursor-pointer max-sm:py-3'>
                  <CardHeader className="max-sm:px-4 max-sm:py-2">
                     <CardTitle className='flex items-center gap-2 max-sm:text-lg'>YouTube Videos <Youtube strokeWidth={1.6}/></CardTitle>
                  </CardHeader>
                  <CardContent className="max-sm:px-4 max-sm:pb-2 max-sm:pt-1">
                     <p className="max-sm:text-sm">A list of links to trusted Youtube Videos.</p>
                  </CardContent>
               </Card>
            </Link>
            <Link to='/roadmaps'>
               <Card className='cursor-pointer max-sm:py-3'>
                  <CardHeader className="max-sm:px-4 max-sm:py-2">
                     <CardTitle className='flex items-center gap-2 max-sm:text-lg'>Roadmaps <GanttChartSquare strokeWidth={1.6}/></CardTitle>
                  </CardHeader>
                  <CardContent className="max-sm:px-4 max-sm:pb-2 max-sm:pt-1">
                     <p className="max-sm:text-sm">A list of roadmaps to guide your learning.</p>
                  </CardContent>
               </Card>
            </Link>
            {/* <Link to='/projects'>
               <Card className='cursor-pointer'>
                  <CardHeader>
                     <CardTitle className='flex items-center gap-2'>Projects <Hammer strokeWidth={1.6}/></CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p>A list of skill based projects to build as you learn.</p>
                  </CardContent>
               </Card>
            </Link> */}
            <a href="https://medium.com/tag/web-development" target="_blank">
               <Card className='cursor-pointer max-sm:py-3'>
                  <CardHeader className="max-sm:px-4 max-sm:py-2">
                     <CardTitle className='flex items-center gap-2 max-sm:text-lg'>Blog Posts <LibrarySquare strokeWidth={1.6}/></CardTitle>
                  </CardHeader>
                  <CardContent className="max-sm:px-4 max-sm:pb-2 max-sm:pt-1">
                     <p className="max-sm:text-sm">Blog Posts to read about web development trends.</p>
                  </CardContent>
               </Card>
            </a>
            {/* <Link to='/design-resources'>
               <Card className='cursor-pointer'>
                  <CardHeader>
                     <CardTitle className='flex items-center gap-2'>Design Resources <Folders strokeWidth={1.6}/></CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p>List of links to design resources for inspiration 👌.</p>
                  </CardContent>
               </Card>
            </Link> */}
            {/* <Link to='/motivation'>
               <Card className='cursor-pointer'>
                  <CardHeader>
                     <CardTitle className='flex items-center gap-2'>Motivation <Flame strokeWidth={1.6}/></CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p>A list of motivational quotes to keep you going 💪.</p>
                  </CardContent>
               </Card>
            </Link> */}
         </section>
      </main>
   )
}

export default Home