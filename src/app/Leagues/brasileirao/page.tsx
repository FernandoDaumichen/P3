"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetchBra from "../../actions/FetchLeagues";
export default function BraA1() {
    const data = useFetchBra();

    return (
        <div>
        <h1>Brasileirão Série A</h1>
        {data.data && <pre>{JSON.stringify(data.data, null, 2)}</pre>}
        </div>
    );
    }
