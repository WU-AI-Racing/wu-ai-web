---
layout: post
title: About
permalink: /about/
---

# Background

WashU has the chance to participate in Formula Student AI, the autonomous driving competition held at the Silverstone Track in the UK. We are seeking ambitious students to collaborate on this complex project. Through this, you can expect to learn cutting-edge AI and robotics concepts.

Instead of building a car from scratch, we will design a sensor and software stack to drive a car that IMechE provides—capable of exceeding 80 mph—to race around a track as quickly as possible.WashU has the chance to participate in Formula Student AI, the autonomous driving competition held at the Silverstone Track in the UK.

<!-- 
<figure style="text-align: center;">
  <img src="https://dayan-parker.github.io/dayanparker/images/Dayan%20Parker_Mini%20Project%20Presentation-1.png" 
       alt="Dayan Parker Mini Project Presentation" 
       style="width:100%; height:auto;">
  <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
    Network Architecture and Performance. 
  </figcaption>
</figure> -->

# Our Teams
---
layout: post
title: Our Teams
---

Our software stack is split into 5 parts, with close collaboration between teams and opportunities to switch roles. We need students to support each division:

### Perception

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

### State Estimation

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

### Path Planning

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

### Control

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

### Business Operations

Manage logistics for international competitions, including flights, visas, and accommodations.  
Coordinate fundraising, sponsorships, and university support to cover competition expenses.  
Handle team communications, scheduling, and documentation to keep everyone aligned.  
Support outreach and recruitment to expand the team’s visibility and attract new talent.


# Competition

After we complete our final solution, we will step out of the simulator and travel to the Silverstone F1 track in the UK to compete in FSUK in late July.  
There, we will rush to integrate our software and rapidly fix and debug any issues that arise during integration.  

After long days working on the car, students will have the opportunity to socialize with other teams at the campsite, visit the F1 museum, and watch car testing at Silverstone.  
Accommodation will be provided at the campsite on the Silverstone track.  

It is an amazing experience—both fun and challenging work—so please come if you are able!

<div style="display: flex; gap: 10px; justify-content: center;">
  <figure style="flex: 1; text-align: center;">
    <img src="/images/ft_team.png" alt="Formula Trinity at FSUK" style="width:100%; height:auto;">
    <figcaption style="margin-top: 10px; font-style: italic; color: #555;">
      Formula Trinity at FSUK 2025
    </figcaption>
  </figure>
</div>


<div style="text-align: center; margin-top: 30px;">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaLW1xDfzf-eGhkhM6brzdf_d826QEOz35_zFse6D7-mIoMA/viewform" 
     style="display: inline-block; padding: 12px 24px; background-color: #007acc; color: white; 
            font-size: 1.5em; border-radius: 8px; text-decoration: none; font-weight: bold;">
    Apply Today!
  </a>
</div>

