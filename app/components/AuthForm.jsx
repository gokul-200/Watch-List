'use client';

import {Auth} from '@supabase/auth-ui-react';
import {createClientComponentClient} from  '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/dist/server/api-utils';

export default function AuthForm(){
    const supabase =createClientComponentClient();
    return (
    <Auth
    supabaseClient={supabase}
    view="magic_link"
    showLinks={false}
    providers={[]}
    redirectTo='http://localhost:3000/auth/callback'
    appearance={{
        theme:'dark',
        button: {
            className: 'bg-purple-600 text-white hover:bg-purple-700 rounded-lg px-4 py-2'
        },
        input:{
            className: 'bg-blue-500 border-black-400 text-black rounded-lg px-4 py-2 mb-2'
        }
    }}
    />
);
}