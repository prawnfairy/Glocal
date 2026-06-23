# GLOCAL - Stock Analysis Dashboard

**A comprehensive stock market analysis tool for traders to monitor, analyze, and predict stock movements.**

![JavaScript](https://img.shields.io/badge/JavaScript-74.4%25-yellow)
![CSS](https://img.shields.io/badge/CSS-18.5%25-blue)
![HTML](https://img.shields.io/badge/HTML-7.1%25-red)

## Overview

GLOCAL is a web-based stock analysis dashboard designed for traders who need to track both global and local (Malaysian) stock market indices and individual stocks. The platform provides real-time monitoring, predictive analytics, and interactive charting capabilities to help traders make informed investment decisions.

## Features

- **Dynamic Watchlist**: Create and manage a personalized watchlist of stocks
- **Real-Time Stock Data**: Browse and search through a comprehensive database of 70+ stocks including:
  - Malaysian indices (KLCI, FTSE Bursa)
  - Malaysian blue-chip stocks (Maxis, GAMUDA, PETRONAS, etc.)
  - International stocks (Apple, Microsoft, Google, Tesla, etc.)
  - Asian indices (Hang Seng Index)

- **Interactive Charts**: 
  - Multi-timeframe views (1 Week, 1 Month, 3 Months, 1 Year)
  - Overlaid line charts for watchlist comparison
  - Real-time price tracking and trend visualization

- **Stock Details Panel**:
  - Current price and percentage change
  - Price predictions using linear regression algorithm
  - Market status indicators (📈 Gaining / 📉 Declining)
  - Market cap information

- **Advanced Search**: 
  - Filter stocks by symbol or company name
  - Quick search functionality with real-time results
  - Add/remove stocks from watchlist directly from search results

- **Predictive Analytics**: 
  - Linear regression-based price prediction
  - Historical data simulation for analysis
  - Trend analysis and forecasting

## Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in the browser

### Usage

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/prawnfairy/Glocal.git
   cd Glocal
   ```

2. **Open in browser**
   - Simply open `main.html` in your web browser
   - No build tools or server required

3. **Getting Started**
   - Browse the stock table to see all available stocks
   - Use the search bar to find specific stocks
   - Click "Add to Watchlist" to track your favorite stocks
   - View your watchlist in the left panel
   - Monitor charts with different timeframes

## Dashboard Components

### 1. Watchlist Panel
- Displays your selected stocks
- Click any stock to view detailed information
- Remove stocks with the "Remove" button
- Shows stock symbols and names

### 2. Stock Details Section
- Current price in USD
- Percentage change (color-coded: green for gains, red for declines)
- AI-powered price prediction for next period
- Market cap information
- Current market status

### 3. Interactive Charts
- Multi-line chart comparing all watchlist stocks
- Timeframe selector (1W, 1M, 3M, 1Y)
- Color-coded lines for easy stock identification
- Responsive design adapts to screen size
- Hover tooltips for precise price information

### 4. Stock Search & Browse
- Comprehensive table of all available stocks
- Search functionality for quick lookup
- One-click add/remove from watchlist
- Price and change percentage display

## Project Structure

```
Glocal/
├── main.html         # Dashboard HTML structure
├── script.js         # Core application logic and interactivity
├── styling.css       # Responsive design and styling
└── README.md         # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js 3.9.1
- **Design**: Responsive CSS Grid/Flexbox
- **Data**: Mock stock data (70+ stocks)

## How It Works

### Price Prediction Algorithm
The app uses **simple linear regression** to predict future stock prices:
- Analyzes historical price data over selected timeframe
- Calculates trend slope and intercept
- Projects next price based on mathematical regression
- Updates predictions when stock data changes

### Historical Data Generation
- Simulates realistic price movements
- Daily price changes ±5% (realistic market volatility)
- Data generated dynamically based on base price
- Different data ranges for different timeframes

### Data Management
- Stock data stored in JavaScript arrays
- Watchlist updates dynamically
- Charts refresh on watchlist changes
- Search filtering in real-time

## Stock Database

### Malaysian Stocks
- KLCI Index, FTSE Bursa, Maxis, GAMUDA, PETRONAS, Axiata, CIMB, Maybank, Public Bank, and more

### International Stocks
- Tech: Apple, Microsoft, Google, NVIDIA, Intel, Adobe
- Finance: Visa, Mastercard, PayPal
- Consumer: Amazon, Walmart, Coca-Cola
- Energy: ExxonMobil, Chevron
- Healthcare: Pfizer, Johnson & Johnson

### Asian Indices
- Hang Seng Index (Hong Kong)
- KLCI Index (Malaysia)
- FTSE Bursa (Malaysia)

## Future Enhancements

- [ ] Real API integration (Yahoo Finance, Alpha Vantage, etc.)
- [ ] User authentication and persistent watchlists
- [ ] Advanced technical indicators (RSI, MACD, Bollinger Bands)
- [ ] News integration and sentiment analysis
- [ ] Portfolio tracking and performance analysis
- [ ] Export reports and watchlist to CSV/PDF
- [ ] Dark mode toggle
- [ ] Mobile app version
- [ ] Alert system for price targets
- [ ] More sophisticated ML-based predictions

## License

This project is open source and available under the MIT License.

## Why Use GLOCAL?

✅ Simple and intuitive interface  
✅ No account creation required  
✅ Real-time stock monitoring  
✅ Predictive analytics built-in  
✅ Beautiful, responsive design  
✅ Completely free to use  
✅ Works offline (after first load)  

---
**Start analyzing stocks today with GLOCAL!** 📊💹
