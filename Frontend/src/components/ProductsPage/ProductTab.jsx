import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Toast } from '@/components/ui/toast'
// import { listenNowAlbums, madeForYouAlbums } from '../data/albums'
// import { AlbumArtwork } from './album-artwork'
// import { PodcastEmptyPlaceholder } from './podcast-empty-placeholder'

export default function ProductTab() {
  return (
    <Tabs defaultValue='music' className='h-full space-y-6'>
      <div className='space-between flex items-center'>
        <TabsList>
          <TabsTrigger value='music' className='relative'>
            Music
          </TabsTrigger>
          <TabsTrigger value='podcasts'>Podcasts</TabsTrigger>
          <TabsTrigger value='live' disabled>
            Live
          </TabsTrigger>
        </TabsList>
        <div className='ml-auto mr-4'>
          <Button
            onClick={() => {
              Toast('This is a toast')
            }}
          >
            <PlusCircle className='mr-2 h-4 w-4' />
            Add music
          </Button>
        </div>
      </div>
      <TabsContent value='music' className='border-none p-0 outline-none'>
        <div className='flex items-center justify-between'>
          <div className='space-y-1'>
            <h2 className='text-2xl font-semibold tracking-tight'>
              Listen Now
            </h2>
            <p className='text-sm text-muted-foreground'>
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className='my-4' />
        <div className='relative'>
          <ScrollArea>
            <div className='flex space-x-4 pb-4'>
              {listenNowAlbums.map((album) => (
                <AlbumArtwork
                  img={Coolernew.png}
                  name={name}
                  className='w-[250px]'
                  aspectRatio='portrait'
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
        </div>    
      </TabsContent>
    </Tabs>
  )
  
}
