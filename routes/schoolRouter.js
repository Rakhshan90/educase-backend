const express = require('express');
const zod = require('zod');
// import { PrismaClient } from '@prisma/client'
const {PrismaClient} = require('@prisma/client')

const schoolRouter = express.Router();
const prisma = new PrismaClient()

const addSchoolInputs = zod.object({
    name: zod.string(),
    address: zod.string(),
    latitude: zod.number(),
    longitude: zod.number(),
});


schoolRouter.post('/addSchool', async(req, res)=>{

    const {name, address, latitude, longitude} = req?.body;
    const {success} = addSchoolInputs.safeParse({name, address, latitude, longitude});
    if(!success){
        res.status(403);
        return res.json({message: "Failed to add school, invalid input type"});
    }

    try {
        const newSchool = await prisma.school.create({
            data: {
                name,
                address,
                latitude,
                longitude,
            }
        });

        res.json(newSchool);
    } catch (error) {
        return res.json({message: "Something went wrong while adding the school"});
    }
});


// Haversine formula to calculate the distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

schoolRouter.get('/listSchools', async (req, res) => {
    const { latitude, longitude } = req.body;

    // Validate input
    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    try {
        // Fetch all schools from the database
        const schools = await prisma.school.findMany();

        // Sort schools by proximity to the user's location
        const sortedSchools = schools.map(school => {
            const distance = calculateDistance(
                parseFloat(latitude),
                parseFloat(longitude),
                school.latitude,
                school.longitude
            );
            return { ...school, distance };
        }).sort((a, b) => a.distance - b.distance);

        res.json({ schools: sortedSchools });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while fetching the schools" });
    }
});

module.exports = schoolRouter;