---
layout: post
title: Our Teams
---

Our software stack is split into 5 parts, with close collaboration between teams and opportunities to switch roles. We need students to support each division:

## Perception

Take data from sensors like depth cameras, LiDAR, and GPS, and extract useful information such as track borders.  
Create machine-learning-based computer vision algorithms using tools such as YOLO and LiDAR point cloud clustering.  
Make high-level engineering decisions about sensor fusion: which sensors to combine, and what to omit to maximize speed.

<div style="display: flex; gap: 10px;">
  <figure style="flex: 1; text-align: center;">
    <img src="/images/Perception_1.png" alt="Computer Vision Calibration" style="width:100%; height:auto;">
  </figure>
  <figure style="flex: 1; text-align: center;">
    <img src="/images/Perception_2.png" alt="Computer Vision Calibration" style="width:100%; height:auto;">
  </figure>
</div>

## State Estimation

Map track data from perception and position it relative to the car. Ensure the car starts, stops, and runs in the correct mode.  
Use SLAM techniques like Kalman filters to provide accurate position estimation and track mapping.  
Integrate GPS with local positioning for robust state estimation and reliable mode switching.

<div style="display: flex; gap: 10px;">
  <figure style="flex: 1; text-align: center;">
    <img src="/images/State_estimation_1.png" alt="State Estimation Visualization" style="width:100%; height:auto;">
  </figure>
  <figure style="flex: 1; text-align: center;">
    <img src="/images/State_estimation_2.png" alt="State Estimation Visualization" style="width:100%; height:auto;">
  </figure>
</div>

## Path Planning

Algorithmically create a trajectory for the autonomous car using positional data from perception and state estimation.  
Implement optimization algorithms that minimize steering angles, respect friction maps, and shorten path length.  
Explore evolutionary algorithms, Rapidly-Exploring Random Trees (RRT), and other advanced planning methods.

<div style="display: flex; gap: 10px;">
  <figure style="flex: 1; text-align: center;">
    <img src="/images/path_planning_1.png" alt="Path Planning Visualization" style="width:100%; height:auto;">
  </figure>
  <figure style="flex: 1; text-align: center;">
    <img src="/images/path_planning_2.png" alt="Path Planning Visualization" style="width:100%; height:auto;">
  </figure>
</div>

## Control

Steer the car according to the planned path using algorithms like pure pursuit for smooth cornering.  
Interpret state estimation instructions to start and stop the car reliably.  
Implement PID motor control algorithms to quickly achieve and maintain constant acceleration.

<div style="display: flex; gap: 10px;">
  <figure style="flex: 1; text-align: center;">
    <img src="/images/control_1.png" alt="Control System Visualization" style="width:100%; height:auto;">
  </figure>
  <figure style="flex: 1; text-align: center;">
    <img src="/images/control_2.png" alt="Control System Visualization" style="width:100%; height:auto;">
  </figure>
</div>

## Business Operations

Manage logistics for international competitions, including flights, visas, and accommodations.  
Coordinate fundraising, sponsorships, and university support to cover competition expenses.  
Handle team communications, scheduling, and documentation to keep everyone aligned.  
Support outreach and recruitment to expand the team’s visibility and attract new talent.
