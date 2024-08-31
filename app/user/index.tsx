import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { PropsWithChildren, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function User({}: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      <Text>{JSON.stringify(session?.user.user_metadata)}</Text>
    </View>
  )
}
