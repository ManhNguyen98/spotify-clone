import { Song } from '@/types'

import useAuthModal from './useAuthModal'
import { useUser } from './useUser'
import usePlayer from './usePlayer'
import useSubscribeModal from './useSubscribeModal'

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer()
  const subscribeModal = useSubscribeModal()
  const authModal = useAuthModal()
  const { user, subscriptions } = useUser()

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen()
    }

    if (!subscriptions) {
      return subscribeModal.onOpen()
    }

    player.setId(id)
    player.setIds(songs.map((song) => song.id))
  }

  return onPlay
}

export default useOnPlay
