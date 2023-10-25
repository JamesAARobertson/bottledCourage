import * as bottlesModel from './model.js';

// function to get all bottles

export async function getAllBottles(req, res) {
  const bottles = await getAllBottles();

  res.status(200).json({
    success: true,
    payload: bottles,
    // check this later
  });
}
export async function createBottle(req, res) {
  const inputUndefined = req.body.message === undefined;
  const date = new Date();
  if (inputUndefined) {
    res.status(400).json({
      success: false,
      error: 'Please input a message',
    });
    return;
  }

  const createdBottle = await bottlesModel.createBottle({
    message: req.body.message,
    timestamp: date.toISOString(),
  });
  console.log(createdBottle);
  res.status(201).json({
    success: true,
    payload: createdBottle,
  });
}

export async function deleteBottle(req, res) {
  const bottleId = req.params.id;
  const deleted = await bottlesModel.deleteBottle(bottleId);
  if (deleted) {
    res.status(200).json({
      success: true,
      payload: deleted,
    });
  } else {
    res.status(404).json({
      success: false,
      error: `No bottle found with the id of ${bottleId}`,
    });
  }
}
