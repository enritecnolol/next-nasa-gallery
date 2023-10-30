## Mars Rover Photo Explorer
This Next.js project is an interactive web application designed to connect with NASA's Open APIs, specifically to access the Mars Rover Photos endpoint. The application enables users to explore fascinating images captured by the Mars Rovers - Curiosity, Opportunity, and Spirit.

## Features
- Rover Photo Retrieval: Connects to NASA's API to fetch photos taken by the Mars Rovers.
- Multi-Rover Support: Users can view photos from Curiosity, Opportunity, and Spirit.
- Pagination: Displays a maximum of 25 photos per page, offering a seamless browsing experience.
- Dynamic Loading: While not required, implementing a dynamic loading feature akin to social media platforms like Facebook or Instagram is a plus.
- Filter by Camera: Users can filter photos based on the specific camera used by the Mars Rovers.
- Default Photo Display: By default, the app shows the latest photos taken on the current day.
- Search by Earth Date: Allows users to search for photos based on 'Earth Day' (e.g., 2020-09-22).
- Search by Sol Date: Enables users to search for photos based on the Martian solar day ('Sol'), such as Sol 2890.

## Prerequisites
- A valid NASA API key (you can obtain it from NASA API)

## Getting Started
1. Clone the repo:
```bash
git clone  <repository-url>
```   
2. Install NPM packages:
```bash
npm install
```   
3. Create a .env file in the root directory and add your NASA API key:
```bash
cp .env.example .env
```   
4. Run the development server:
```bash
npm run dev
```   
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
Browse through the application to view photos from different Mars Rovers. Use the provided filters to narrow down your search by rover, camera type, Earth date, or Sol date.

## Contributing
Contributions to enhance the Mars Rover Photo Explorer are welcomed. Please feel free to fork the repository and create a pull request or open an issue for bugs, ideas, or feature requests.

## License
Distributed under the MIT License. See LICENSE for more information.
