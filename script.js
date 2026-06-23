document.addEventListener("DOMContentLoaded", function()
{
    const watchlist = document.getElementById("watchlist");
    const stockDetails = document.getElementById("stockDetails");
    const searchFind = document.getElementById("search");
    const stockTB = document.querySelector("#stocks tbody");
    const chartsContainer = document.getElementById("chartsContainer"); // Add this line

    // Store chart instances for cleanup
    let chartInstances = [];

    // Function to fetch and display stock data
    let watchlistStocks = 
    [
        { symbol: "KLSE", name: "KLCI Index", price: 1518.11, change: "-0.56" },
        { symbol: "MAXIS", name: "Maxis Bhd", price: 3.60, change: "+0.28" },
        { symbol: "GAMUDA", name: "GAMUDA Bhd", price: 4.77, change: "-0.21" },
        { symbol: "PCHEM", name: "PETRONAS Chemicals Group Bhd", price: 3.33, change: "+0.60" }
    ];

    const allStocks =
    [
        { symbol: "KLSE", name: "KLCI Index", price: 1518.11, change: "-0.56" },
        { symbol: "MAXIS", name: "Maxis Bhd", price: 3.60, change: "+0.28" },
        { symbol: "GAMUDA", name: "GAMUDA Bhd", price: 4.77, change: "-0.21" },
        { symbol: "PCHEM", name: "PETRONAS Chemicals Group Bhd", price: 3.33, change: "+0.60" },
        { symbol: "AXIATA", name: "Axiata Group Bhd", price: 2.06, change: "-1.90" },
        { symbol: "CIMB", name: "CIMB Group Holdings Bhd", price: 6.82, change: "-1.02" },
        { symbol: "YTL", name: "YTL Corporation Bhd", price: 2.17, change: "-1.36" },
        { symbol: "TENAGA", name: "Tenaga Nasional Bhd", price: 14.30, change: "+0.28" },
        { symbol: "MAYBANK", name: "Malayan Banking Bhd", price: 9.70, change: "-0.72" },
        { symbol: "PBBANK", name: "Public Bank Bhd", price: 4.25, change: "-0.93" },
        { symbol: "PPB", name: "PPB Group Bhd", price: 10.64, change: "-1.48" },
        { symbol: "NESTLE", name: "Nestle (Malaysia) Bhd", price: 73.82, change: "-3.35" },
        { symbol: "PMETAL", name: "Press Metal Aluminium Holdings Bhd", price: 5.00, change: "-0.60" },
        { symbol: "KLFTEM", name: "FTSE Bursa Emas Index", price: 11370.18, change: "-0.65" },
        { symbol: "NVDA", name: "NVIDIA Corporation", price: 141.97, change: "-2.09" },
        { symbol: "TSLA", name: "Tesla, Inc.", price: 325.31, change: "+1.94" },
        { symbol: "INTC", name: "Intel Corporation", price: 20.14, change: "-3.03" },
        { symbol: "F", name: "Ford Motor Company", price: 10.43, change: "-0.95" },
        { symbol: "SOFI", name: "SoFi Technologies Inc.", price: 14.09, change: "-5.44" },
        { symbol: "HSI", name: "Hang Seng Index", price: 23892.56, change: "-0.59" },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: 175.88, change: "-0.62" },
        { symbol: "AMZN", name: "Amazon.com Inc.", price: 212.10, change: "-0.53" },
        { symbol: "MSFT", name: "Microsoft Corporation", price: 474.96, change: "-0.82" },
        { symbol: "AAPL", name: "Apple Inc.", price: 196.45, change: "-1.38" },
        { symbol: "META", name: "Meta Platforms Inc.", price: 682.87, change: "-1.51" },
        { symbol: "NFLX", name: "Netflix Inc.", price: 1212.15, change: "-0.24" },
        { symbol: "DIS", name: "Walt Disney Company", price: 117.94, change: "-0.56" },
        { symbol: "BABA", name: "Alibaba Group Holding Ltd", price: 112.87, change: "-3.22" },
        { symbol: "VISA", name: "Visa Inc.", price: 33.15, change: "-4.77" },
        { symbol: "MA", name: "Mastercard Inc.", price: 562.03, change: "-4.62" },
        { symbol: "AAX", name: "AirAsia X Bhd", price: 1.67, change: "-4.02"},
        { symbol: "TM", name: "Telekom Malaysia Bhd", price: 6.60, change: "-0.45" },
        { symbol: "PYPL", name: "Paypal Holdings Inc", price: 70.83, change: "-5.32"},
        { symbol: "ASTRO", name: "Astro Malaysia Holdings Bhd", price: 0.18, change: "-5.26" },
        { symbol: "IOICORP", name: "IOI Corporation Bhd", price: 3.61, change: "+0.28"},
        { symbol: "SIME", name: "Sime Darby Bhd", price: 1.68, change: "-3.45" },
        { symbol: "KLCC", name: "KLCC Property Holdings Bhd", price: 8.98, change: "-0.22" },
        { symbol: "GARUDA", name: "Garuda Construction and Engineering Ltd", price: 120.52, change: "-3.47"},
        { symbol: "MISC", name: "MISC Bhd", price: 7.50, change: "-2.60" },
        { symbol: "PETDAG", name: "PETRONAS Dagangan Bhd", price: 20.94, change: "+0.87" },
        { symbol: "IHH", name: "IHH Healthcare Bhd", price: 6.90, change: "+0.00" },
        { symbol: "TOPGLOV", name: "Top Glove Corporation Bhd", price: 0.77, change: "-3.75" },
        { symbol: "HARTA", name: "Hartalega Holdings Bhd", price: 1.76, change: "-3.83" },
        { symbol: "KOSSAN", name: "Kossan Rubber Industries Bhd", price: 1.57, change: "-4.85" },
        { symbol: "BIMB", name: "Bank Islam Malaysia Bhd", price: 2.28, change: "-0.44" },
        { symbol: "RHBBANK", name: "RHB Bank Bhd", price: 6.36, change: "-0.47" },
        { symbol: "HLBANK", name: "Hong Leong Bank Bhd", price: 19.52, change: "-0.61" },
        { symbol: "SINARAN", name: "Sinaran Advance Group Bhd", price: 0.03, change: "-14.29" },
        { symbol: "TANCO", name: "Tanco Holdings Bhd", price: 0.96, change: "+0.52" },
        { symbol: "GENTING", name: "Genting Bhd", price: 3.07, change: "-0.32"},
        { symbol: "MAS", name: "Masco Corp", price: 61.88,  change: "-3.06" },
        { symbol: "HMC", name: "Honda Motor Co Ltd", price: 29.12, change: "-0.21" },
        { symbol: "BENZ", name: "Mercedes-Benz Group AG (BENZ)", price: 21.41, change: "-2.77" },
        { symbol: "PFIZER", name: "Pfizer Ltd", price: 5882.50, change: "-0.11" },
        { symbol: "ORCL", name: "Oracle Corporation", price: 215.22, change: "+7.69" },
        { symbol: "IBM", name: "International Business Machines Corporation", price: 277.22, change: "-1.36" },
        { symbol: "CSCO", name: "Cisco Systems Inc.", price: 64.09, change: "-1.55" },
        { symbol: "ADBE", name: "Adobe Inc.", price: 391.68, change: "-5.32" },
        { symbol: "SPOT", name: "Spotify Technology S.A.", price: 710.85, change: "+1.14" },
        { symbol: "WMT", name: "Walmart Inc.", price: 94.44, change: "-0.41" },
        { symbol: "KO", name: "Coca-Cola Company", price: 71.02, change: "-0.99" },
        { symbol: "PEP", name: "PepsiCo Inc.", price: 130.85, change: "-1.10" },
        { symbol: "XOM", name: "Exxon Mobil Corporation", price: 112.12, change: "+2.18" },
        { symbol: "CHEV", name: "Chevron Corporation", price: 19.25, change: "+0.79" },
        { symbol: "JNJ", name: "Johnson & Johnson", price: 157.10, change: "+0.28" },
        { symbol: "NIKE", name: "Nike Inc.", price: 229.70, change: "-0.15" }
    ];

    function predictNextPrice(history) 
    {
        const n = history.length;
        if (n < 2) return history[n-1];

        // Simple linear regression to predict next price
        let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
        for (let i = 0; i < n; i++) {
            sumX += i;
            sumY += history[i];
            sumXY += i * history[i];
            sumXX += i * i;
        }
        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;
        return (slope * n) + intercept;
    }

    // Generate mock historical data for charts
    function generateHistoricalData(basePrice, days = 30) 
    {
        const data = [];
        let price = basePrice;
        const today = new Date();
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            
            // Generate realistic price movement
            const change = (Math.random() - 0.5) * 0.1; // +-5% daily change
            price = price * (1 + change);
            
            data.push({
                date: date.toISOString().split('T')[0],
                price: parseFloat(price.toFixed(2))
            });
        }
        
        return data;
    }

    function createCombinedChart(timeframe = '1W') 
    {
        const canvas = document.createElement('canvas');
        canvas.id = 'combined-chart';
        canvas.width = 800;
        canvas.height = 450;
        
        const container = document.getElementById('chartsContainer');
        const existingCanvas = container.querySelector('canvas');
        if (existingCanvas) {
            existingCanvas.remove();
        }
        container.appendChild(canvas);

        // Generate historical data based on timeframe
        let days;
        switch(timeframe) {
            case '1W': days = 7; break;
            case '1M': days = 30; break;
            case '3M': days = 90; break;
            case '1Y': days = 365; break;
            default: days = 7;
        }

        // Generate color palette for different stocks
        const colors = [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
            '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF',
            '#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56'
        ];

        // Create datasets for each stock
        const datasets = watchlistStocks.map((stock, index) => {
            const historicalData = generateHistoricalData(stock.price, days);
            const color = colors[index % colors.length];

            return {
                label: `${stock.symbol} - ${stock.name}`,
                data: historicalData.map(d => d.price),
                borderColor: color,
                backgroundColor: color + '20', // Add transparency
                borderWidth: 3,
                fill: false,
                tension: 0.1,
                pointRadius: days <= 7 ? 3 : (days <= 30 ? 2 : 1),
                pointHoverRadius: 5
            };
        });

        // Get dates from the first stock
        const dates = watchlistStocks.length > 0 ? 
            generateHistoricalData(watchlistStocks[0].price, days).map(d => {
                const date = new Date(d.date);
                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }) : [];
        
        const ctx = canvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (chartInstances['combined']) {
            chartInstances['combined'].destroy();
        }

        chartInstances['combined'] = new Chart(ctx, 
        {
            type: 'line',
            data: {
                labels: dates,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        ticks: {
                            maxTicksLimit: days <= 7 ? 7 : (days <= 30 ? 6 : 8)
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Price ($)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        beginAtZero: false
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    }

    function updateCharts() 
    {
        chartsContainer.innerHTML = '';
        
        if (watchlistStocks.length === 0) {
            chartsContainer.innerHTML = '<div class="no-charts">Add stocks to your watchlist to see charts</div>';
            return;
        }

        // Create a single chart container
        const chartDiv = document.createElement('div');
        chartDiv.className = 'chart-container';
        chartDiv.id = 'combined-container';
        
        chartDiv.innerHTML = `
            <div class="chart-header">
                <div>
                    <h3 class="chart-title">Watchlist Overview</h3>
                    <div class="stock-summary">
                        ${watchlistStocks.map(stock => {
                            const changeClass = stock.change >= 0 ? 'positive' : 'negative';
                            const changeSymbol = stock.change >= 0 ? '+' : '';
                            return `<span class="stock-info">
                                ${stock.symbol}: ${stock.price.toFixed(2)} 
                                <span class="${changeClass}">(${changeSymbol}${stock.change}%)</span>
                            </span>`;
                        }).join(' | ')}
                    </div>
                </div>
                <div class="chart-controls">
                    <button class="time-btn active" data-timeframe="1W">1W</button>
                    <button class="time-btn" data-timeframe="1M">1M</button>
                    <button class="time-btn" data-timeframe="3M">3M</button>
                    <button class="time-btn" data-timeframe="1Y">1Y</button>
                </div>
            </div>
        `;
        
        chartsContainer.appendChild(chartDiv);
        createCombinedChart('1W');

        // Add event listeners for timeframe buttons
        document.querySelectorAll('.time-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const timeframe = this.dataset.timeframe;
                
                // Update active button
                document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Recreate chart with new timeframe
                createCombinedChart(timeframe);
            });
        });
    }


    function fetchStockData(symbol)
    {
        return new Promise((resolve) => {
            const stock = allStocks.find(s => s.symbol === symbol);
            setTimeout(() => resolve(stock || {price: 0, change: 0}), 65);
        });
    }

    function showStockDetails(stock)
    {
        fetchStockData(stock.symbol).then(data => {
            const detailsDiv = document.getElementById('stockDetails');
            
            // Generate sample historical data for prediction
            const historicalData = generateHistoricalData(data.price, 30).map(d => d.price);
            const predicted = predictNextPrice(historicalData);
            
            detailsDiv.innerHTML = `
                <h3>${stock.name} (${stock.symbol})</h3>
                <p><strong>Current Price:</strong> $${data.price.toFixed(2)}</p>
                <p><strong>Change:</strong> <span class="${data.change >= 0 ? 'positive' : 'negative'}">${data.change > 0 ? '+' : ''}${data.change}%</span></p>
                <p><strong>Predicted Next Price:</strong> $${predicted.toFixed(2)}</p>
                <p><strong>Market Cap:</strong> ${stock.symbol.includes('Index') ? 'N/A (Index)' : 'Calculated based on shares'}</p>
                <p><strong>Status:</strong> ${data.change >= 0 ? '📈 Gaining' : '📉 Declining'}</p>
            `;
        });
    }

    function updateWatchlist() 
    {
        watchlist.innerHTML = "";
        watchlistStocks.forEach(stock => 
        {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="stock-name">${stock.symbol} - ${stock.name}</span>
                <button class="remove">Remove</button>
            `;
            
            const removeButton = li.querySelector(".remove");
            removeButton.addEventListener("click", (e) => {
                e.stopPropagation();
                watchlistStocks = watchlistStocks.filter(s => s.symbol !== stock.symbol);
                updateWatchlist();
                updateCharts();
                displayStockTable(searchFind.value ? getFilteredStocks() : allStocks);
            });

            // Add click event to display stock details
            li.addEventListener("click", () => {
                showStockDetails(stock);
            });
            
            watchlist.appendChild(li);
        });
    }

    function getFilteredStocks() 
    {
        const searchTerm = searchFind.value.toLowerCase();
        return allStocks.filter(stock => 
            stock.symbol.toLowerCase().includes(searchTerm) || 
            stock.name.toLowerCase().includes(searchTerm)
        );
    }

    function displayStockTable(stocks)
    {
        if(!stockTB) return;
        
        stockTB.innerHTML = "";

        stocks.forEach(stock => {
            const changeClass = stock.change >= 0 ? "positive" : "negative";
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${stock.symbol}</td>
                <td>${stock.name}</td>
                <td>$${stock.price.toFixed(2)}</td>
                <td class="${changeClass}">${stock.change > 0 ? '+' : ''}${stock.change}%</td>
                <td class="actions"></td>
            `;

            const actionsTd = tr.querySelector(".actions");

            if(!watchlistStocks.some(s => s.symbol === stock.symbol))
            {
                const addButton = document.createElement("button");
                addButton.textContent = "Add to Watchlist";
                addButton.classList.add("add");
                addButton.addEventListener("click", (e) => {
                    e.stopPropagation(); // Prevent the click event from bubbling up to the row
                    watchlistStocks.push(stock);
                    updateWatchlist();
                    updateCharts(); // Add this line to refresh charts when adding
                    displayStockTable(searchFind.value ? getFilteredStocks() : allStocks);
                });
                actionsTd.appendChild(addButton);
            }
            else
            {
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove from Watchlist";
                removeButton.classList.add("remove");
                removeButton.addEventListener("click", (e) => {
                    e.stopPropagation(); // Prevent the click event from bubbling up to the row
                    watchlistStocks = watchlistStocks.filter(s => s.symbol !== stock.symbol);
                    updateWatchlist();
                    updateCharts(); // Add this line to refresh charts when removing
                    displayStockTable(searchFind.value ? getFilteredStocks() : allStocks);
                });
                actionsTd.appendChild(removeButton);
            }

            tr.addEventListener("click", () => {
                showStockDetails(stock);
            });

            stockTB.appendChild(tr);
        });
    }

    searchFind.addEventListener("input", (event) => {
        const filteredStocks = getFilteredStocks();
        displayStockTable(filteredStocks);
    });

    // Initial display of watchlist and stock details
    updateWatchlist();
    updateCharts();
    displayStockTable(allStocks);
});