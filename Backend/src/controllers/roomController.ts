import { RequestHandler } from "express";
import prisma from "../prismaClient";

const readRoom: RequestHandler = async (req, res) => {
  const room = await prisma.room.findMany({
    select: {
      buildingName: true,
      latitude: true,
      longitude: true,
      class: true,
      level: true,
      identification: true,
    },
  });
  return res.json(room);
};

const readOneRoom: RequestHandler = async (req, res) => {
  const { identification } = req.params;
  const room = await prisma.room.findMany({
    where: { identification },
    select: {
      buildingName: true,
      latitude: true,
      longitude: true,
      class: true,
      level: true,
      identification: true,
    },
  });
  return res.json(room);
};

const readRoomLevel: RequestHandler = async (req, res) => {
  const { level } = req.params;
  const levelInt = parseInt(level, 10);
  const rooms = await prisma.room.findMany({
    where: { level: levelInt },
    select: {
      buildingName: true,
      latitude: true,
      longitude: true,
      class: true,
      level: true,
      identification: true,
    },
  });
  return res.json(rooms);
};

const readRoomPerBuilding: RequestHandler = async (req, res) => {
  const { buildingName } = req.params;
  const rooms = await prisma.room.findMany({
    where: { buildingName },
    select: {
      buildingName: true,
      latitude: true,
      longitude: true,
      class: true,
      level: true,
      identification: true,
    },
  });
  return res.json(rooms);
};

export default { readRoom, readOneRoom, readRoomLevel, readRoomPerBuilding };
