import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from "../assets/icons/gym.png"

const BodyPart = (props) => {
    return (
        <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card" direction="row"
            sx={{
                borderTop: props.bodyPart === props.singleDataElement ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                cusror: "pointer",
                gap: "47px"
            }}
            onClick={() => {
                props.setBodyPart(props.singleDataElement)
                window.scrollTo({ top: 1700, left: 100, behavior: 'smooth' })
            }}>
            <img src={Icon} alt="dumbell" style={{ width: "42px", height: "42px" }} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{props.singleDataElement}</Typography>
        </Stack>
    )
}

export default BodyPart