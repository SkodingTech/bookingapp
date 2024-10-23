"use client"
import { redirect } from 'next/navigation';
import { sessionState } from "../utils/session";
import { useEffect, useLayoutEffect } from 'react';

import React from 'react'

function withAuth(Component: any) {
    return function withAuth(props: any){
        const session = sessionState;
        useEffect (() => {
              if (!session){
                redirect("/")
              }
            }, []);

            if(!session){
                return null;
            }
            return <Component{...props} />
    };
 
}

export default withAuth