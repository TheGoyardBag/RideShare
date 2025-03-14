"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";
import MyMap from "./map";
import Logout from "../Logout";
import { useState, useEffect } from "react";
import { SlArrowLeftCircle } from "react-icons/sl";


export default function Home() {
  const [userId, setUserId] = useState([]);

    // Load user Id
    useEffect(() => {
      // Get all my posted rides
      const url = "/api/getProfile?userid=getID";
      fetch(url)
        .then((response) => response.ok && response.json())
        .then((userId) => {
          setUserId(userId);
        });
    }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Welcome Driver!</h1>
      <Button
        component={Link}
        href="/rider_home"
        sx={{
          fontWeight: 700,
          width: "200px",
          height: "50px",
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        Switch to Rider Mode!
      </Button>
      <Logout />
      <p>
        This is the driver homepage! Click on an option to continue or logout!
      </p>
      {/* Button container */}
      <Box
        sx={{
          display: "flex", // Set display to flex
          flexDirection: "row", // Align items horizontally
          gap: "20px", // Add gap between buttons
          marginBottom: "20px", // Add margin to the bottom
        }}
      >
        {/*Links*/}

        <Button
          component={Link}
          href="/driver_home/createride"
          sx={{
            fontWeight: 700,
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Create Rides
        </Button>

        <Button
          component={Link}
          href="/driver_home/active"
          sx={{
            fontWeight: 700,
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          My Rides
        </Button>

        <Button
          component={Link}
          href="/driver_home/active_drive"
          sx={{
            fontWeight: 700,
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Active Drive
        </Button>

        <Button
          component={Link}
          href="/driver_home/message"
          sx={{
            fontWeight: 700,
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Messaging
        </Button>

        <Button
          component={Link}
          href={"/driver_home/profile/"+userId}
          sx={{
            fontWeight: 700,
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Profile
        </Button>

        <Button
          component={Link}
          href={"/uploaddl"}
          sx={{
            fontWeight: 700,
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Get Verified
        </Button>
      </Box>
      <MyMap />
    </Box>
  );
}
