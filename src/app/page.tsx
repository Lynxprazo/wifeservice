"use client";

import React from "react";
import { Suspense } from "react";
import Musiclist from "./main/main";
import Loading from "./loading";
import Background from './main/background';
import Nav from "./component/nav";

export default function Home() {
  return (
    <div className="main-container">
      <Background/>
      <div className="page-container">
        <span className="top-title">
          <Nav/>
          <h1 className="title-page">Welcome To Wifi-Service</h1>
          <Musiclist />
        </span>
        <Loading />

        {/* <Suspense fallback={<loading/>}>
           
        </Suspense> */}
      </div>
    </div>
  );
}
