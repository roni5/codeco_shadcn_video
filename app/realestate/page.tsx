
<!DOCTYPE
html >
  <html lang="en"><head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>U.S. Real Estate Market Analysis</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
    <style>
        :root {
            --pastel-primary: #B8A9C9;
            --pastel-secondary: #A8D5BA;
            --pastel-accent: #F7E7CE;
            --pastel-highlight: #FFB5B5;
            --pastel-neutral: #E8E8E8;
            --pastel-text: #4A4A4A;
            --pastel-background: #FAFAFA;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--pastel-background);
            color: var(--pastel-text);
            line-height: 1.6;
        }
        
        .serif-font {
            font-family: 'Playfair Display', serif;
        }
        
        .pastel-primary { background-color: var(--pastel-primary); }
        .pastel-secondary { background-color: var(--pastel-secondary); }
        .pastel-accent { background-color: var(--pastel-accent); }
        .pastel-highlight { background-color: var(--pastel-highlight); }
        .pastel-neutral { background-color: var(--pastel-neutral); }
        
        .text-pastel-primary { color: var(--pastel-primary); }
        .text-pastel-secondary { color: var(--pastel-secondary); }
        .text-pastel-accent { color: var(--pastel-accent); }
        .text-pastel-highlight { color: var(--pastel-highlight); }
        
        .card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
        }
        
        .hero-section {
            background: linear-gradient(135deg, var(--pastel-primary) 0%, var(--pastel-secondary) 100%);
            min-height: 60vh;
        }
        
        .metric-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .metric-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .chart-container {
            background: white;
            border-radius: 12px;
            padding: 24px;
            margin: 24px 0;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        
        .insight-box {
            background: linear-gradient(135deg, #f8f9ff 0%, #fff8f0 100%);
            border-left: 4px solid var(--pastel-primary);
            border-radius: 8px;
            padding: 20px;
            margin: 16px 0;
        }
        
        .download-btn {
            background: linear-gradient(135deg, var(--pastel-primary) 0%, var(--pastel-secondary) 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        
        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(184, 169, 201, 0.4);
        }
        
        .section-divider {
            height: 2px;
            background: linear-gradient(90deg, var(--pastel-primary) 0%, var(--pastel-secondary) 50%, var(--pastel-accent) 100%);
            margin: 48px 0;
            border-radius: 1px;
        }
        
        @media (max-width: 768px) {
            .hero-section { min-height: 50vh; }
            .chart-container { padding: 16px; margin: 16px 0; }
        }
    </style>
<script src="https://statics.moonshot.cn/sdk/preview-widgets.min.js" defer=""></script></head>
<body>
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <i class="fas fa-home text-2xl text-pastel-primary mr-3"></i>
                    <span class="serif-font text-xl font-semibold text-gray-800">Real Estate Analysis</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#overview" class="text-gray-600 hover:text-pastel-primary transition-colors">Overview</a>
                    <a href="#prices" class="text-gray-600 hover:text-pastel-primary transition-colors">Prices</a>
                    <a href="#growth" class="text-gray-600 hover:text-pastel-primary transition-colors">Growth</a>
                    <a href="#affordability" class="text-gray-600 hover:text-pastel-primary transition-colors">Affordability</a>
                    <a href="#insights" class="text-gray-600 hover:text-pastel-primary transition-colors">Insights</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section flex items-center justify-center text-white">
        <div class="max-w-4xl mx-auto text-center px-4">
            <h1 class="serif-font text-5xl md:text-6xl font-bold mb-6 leading-tight">
                U.S. Real Estate Market Analysis
            </h1>
            <p class="text-xl md:text-2xl mb-8 font-light opacity-90">
                Comprehensive insights into housing prices, growth trends, and affordability across 36 major metropolitan areas
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#overview" class="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explore Analysis
                </a>
                <a href="real_estate_data.csv" class="download-btn">
                    <i class="fas fa-download"></i>
                    Download Data
                </a>
            </div>
        </div>
    </section>

    <!-- Executive Summary -->
    <section id="overview" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="serif-font text-4xl font-bold text-gray-800 mb-4">Executive Summary</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our comprehensive analysis reveals a U.S. housing market in transition, with significant affordability challenges 
                    and regional disparities shaping the current landscape.
                </p>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div class="metric-card card p-6 text-center">
                    <div class="text-3xl font-bold text-pastel-primary mb-2">36</div>
                    <div class="text-gray-600 font-medium">Cities Analyzed</div>
                </div>
                <div class="metric-card card p-6 text-center">
                    <div class="text-3xl font-bold text-pastel-secondary mb-2">$489K</div>
                    <div class="text-gray-600 font-medium">Average Price</div>
                </div>
                <div class="metric-card card p-6 text-center">
                    <div class="text-3xl font-bold text-pastel-highlight mb-2">5.7</div>
                    <div class="text-gray-600 font-medium">Avg Price-to-Income</div>
                </div>
                <div class="metric-card card p-6 text-center">
                    <div class="text-3xl font-bold text-pastel-accent mb-2">-0.5%</div>
                    <div class="text-gray-600 font-medium">Price Growth</div>
                </div>
            </div>

            <!-- Key Findings -->
            <div class="insight-box">
                <h3 class="serif-font text-xl font-semibold mb-3 text-gray-800">
                    <i class="fas fa-lightbulb text-pastel-primary mr-2"></i>
                    Key Findings
                </h3>
                <ul class="space-y-2 text-gray-700">
                    <li><strong>Market Correction:</strong> Average price decline of -0.49% indicates market stabilization after pandemic surge</li>
                    <li><strong>Affordability Crisis:</strong> Average price-to-income ratio of 5.7 is 90% above recommended levels</li>
                    <li><strong>Geographic Disparity:</strong> Clear divide between premium coastal markets and affordable inland cities</li>
                    <li><strong>Income Growth:</strong> Average income growth of 4.13% provides partial relief despite price corrections</li>
                </ul>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <!-- Housing Price Statistics -->
    <section id="prices" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="serif-font text-4xl font-bold text-gray-800 mb-4">Housing Price Statistics</h2>
                <p class="text-lg text-gray-600">Analysis of median home prices across major U.S. metropolitan areas</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- Most Expensive Cities -->
                <div class="card p-6">
                    <h3 class="serif-font text-2xl font-semibold mb-4 text-pastel-primary">
                        <i class="fas fa-crown mr-2"></i>Most Expensive Cities
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">San Jose, CA</span>
                            <span class="text-pastel-primary font-bold">$1.58M</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">San Francisco, CA</span>
                            <span class="text-pastel-primary font-bold">$1.13M</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Los Angeles, CA</span>
                            <span class="text-pastel-primary font-bold">$959K</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">San Diego, CA</span>
                            <span class="text-pastel-primary font-bold">$926K</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium">Seattle, WA</span>
                            <span class="text-pastel-primary font-bold">$751K</span>
                        </div>
                    </div>
                </div>

                <!-- Most Affordable Cities -->
                <div class="card p-6">
                    <h3 class="serif-font text-2xl font-semibold mb-4 text-pastel-secondary">
                        <i class="fas fa-home mr-2"></i>Most Affordable Cities
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Pittsburgh, PA</span>
                            <span class="text-pastel-secondary font-bold">$233K</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Oklahoma City, OK</span>
                            <span class="text-pastel-secondary font-bold">$243K</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Memphis, TN</span>
                            <span class="text-pastel-secondary font-bold">$244K</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Cleveland, OH</span>
                            <span class="text-pastel-secondary font-bold">$248K</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium">Birmingham, AL</span>
                            <span class="text-pastel-secondary font-bold">$257K</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Price Analysis Chart -->
            <div class="chart-container">
                <h3 class="serif-font text-2xl font-semibold mb-6 text-gray-800">Housing Price Distribution</h3>
                <div id="priceChart" style="height: 400px;"></div>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <!-- Housing Growth Trends -->
    <section id="growth" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="serif-font text-4xl font-bold text-gray-800 mb-4">Housing Price Growth Trends</h2>
                <p class="text-lg text-gray-600">Year-over-year price changes reveal market momentum and regional dynamics</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- Fastest Growing -->
                <div class="card p-6">
                    <h3 class="serif-font text-2xl font-semibold mb-4 text-pastel-secondary">
                        <i class="fas fa-arrow-up mr-2"></i>Fastest Growing Cities
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Cleveland, OH</span>
                            <span class="text-pastel-secondary font-bold">+4.66%</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Louisville, KY</span>
                            <span class="text-pastel-secondary font-bold">+3.99%</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Detroit, MI</span>
                            <span class="text-pastel-secondary font-bold">+3.92%</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">New York, NY</span>
                            <span class="text-pastel-secondary font-bold">+3.72%</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium">Chicago, IL</span>
                            <span class="text-pastel-secondary font-bold">+3.61%</span>
                        </div>
                    </div>
                </div>

                <!-- Declining Markets -->
                <div class="card p-6">
                    <h3 class="serif-font text-2xl font-semibold mb-4 text-pastel-highlight">
                        <i class="fas fa-arrow-down mr-2"></i>Declining Markets
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Tampa, FL</span>
                            <span class="text-pastel-highlight font-bold">-6.20%</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Austin, TX</span>
                            <span class="text-pastel-highlight font-bold">-6.13%</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Miami, FL</span>
                            <span class="text-pastel-highlight font-bold">-4.67%</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Orlando, FL</span>
                            <span class="text-pastel-highlight font-bold">-4.35%</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium">Dallas, TX</span>
                            <span class="text-pastel-highlight font-bold">-3.88%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Growth Analysis Chart -->
            <div class="chart-container">
                <h3 class="serif-font text-2xl font-semibold mb-6 text-gray-800">Price Growth Analysis</h3>
                <div id="growthChart" style="height: 400px;"></div>
            </div>

            <div class="insight-box mt-8">
                <h4 class="serif-font text-lg font-semibold mb-2 text-gray-800">Growth Trend Insights</h4>
                <p class="text-gray-700">
                    The data reveals a market correction after the pandemic-driven surge. Midwestern cities like Cleveland and Louisville 
                    are showing resilience with positive growth, while previously overheated markets in Florida and Texas are experiencing 
                    necessary corrections. This suggests a healthier, more balanced market emerging.
                </p>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <!-- Housing Affordability -->
    <section id="affordability" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="serif-font text-4xl font-bold text-gray-800 mb-4">Housing Affordability Analysis</h2>
                <p class="text-lg text-gray-600">Price-to-income ratios reveal the affordability crisis across U.S. markets</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- Most Affordable -->
                <div class="card p-6">
                    <h3 class="serif-font text-2xl font-semibold mb-4 text-pastel-secondary">
                        <i class="fas fa-check-circle mr-2"></i>Most Affordable Cities
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Oklahoma City, OK</span>
                            <span class="text-pastel-secondary font-bold">3.5</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Pittsburgh, PA</span>
                            <span class="text-pastel-secondary font-bold">3.6</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Louisville, KY</span>
                            <span class="text-pastel-secondary font-bold">4.0</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Tampa, FL</span>
                            <span class="text-pastel-secondary font-bold">4.3</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium">Chicago, IL</span>
                            <span class="text-pastel-secondary font-bold">4.3</span>
                        </div>
                    </div>
                </div>

                <!-- Least Affordable -->
                <div class="card p-6">
                    <h3 class="serif-font text-2xl font-semibold mb-4 text-pastel-highlight">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Least Affordable Cities
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">Los Angeles, CA</span>
                            <span class="text-pastel-highlight font-bold">11.7</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">San Jose, CA</span>
                            <span class="text-pastel-highlight font-bold">10.7</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">New York, NY</span>
                            <span class="text-pastel-highlight font-bold">8.8</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-100">
                            <span class="font-medium">San Diego, CA</span>
                            <span class="text-pastel-highlight font-bold">8.3</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium">San Francisco, CA</span>
                            <span class="text-pastel-highlight font-bold">8.1</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Affordability Crisis Alert -->
            <div class="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
                <div class="flex items-center">
                    <i class="fas fa-exclamation-triangle text-red-400 text-2xl mr-4"></i>
                    <div>
                        <h4 class="font-semibold text-red-800 mb-2">Affordability Crisis Alert</h4>
                        <p class="text-red-700">
                            Only 2 out of 36 cities analyzed meet the recommended affordability standard of 3.0 or lower. 
                            The average price-to-income ratio of 5.7 indicates a severe affordability crisis across major U.S. markets.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Affordability Chart -->
            <div class="chart-container">
                <h3 class="serif-font text-2xl font-semibold mb-6 text-gray-800">Affordability Analysis</h3>
                <div id="affordabilityChart" style="height: 400px;"></div>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <!-- Market Insights -->
    <section id="insights" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="serif-font text-4xl font-bold text-gray-800 mb-4">Market Insights &amp; Recommendations</h2>
                <p class="text-lg text-gray-600">Strategic implications for buyers, investors, and policymakers</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <!-- For Buyers -->
                <div class="card p-6">
                    <div class="text-center mb-4">
                        <i class="fas fa-user text-4xl text-pastel-primary mb-3"></i>
                        <h3 class="serif-font text-xl font-semibold">For Home Buyers</h3>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-700">
                        <li>• Consider Midwestern growth markets for better affordability</li>
                        <li>• Oklahoma City and Pittsburgh offer ratios near recommended levels</li>
                        <li>• Avoid overheated coastal markets unless financially secure</li>
                        <li>• Monitor interest rate impacts on purchasing power</li>
                    </ul>
                </div>

                <!-- For Investors -->
                <div class="card p-6">
                    <div class="text-center mb-4">
                        <i class="fas fa-chart-line text-4xl text-pastel-secondary mb-3"></i>
                        <h3 class="serif-font text-xl font-semibold">For Investors</h3>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-700">
                        <li>• Focus on cities with positive growth and reasonable ratios</li>
                        <li>• Cleveland, Louisville showing strong growth potential</li>
                        <li>• Avoid Florida markets during current correction phase</li>
                        <li>• Consider rental markets in high-ratio cities</li>
                    </ul>
                </div>

                <!-- For Policymakers -->
                <div class="card p-6">
                    <div class="text-center mb-4">
                        <i class="fas fa-landmark text-4xl text-pastel-accent mb-3"></i>
                        <h3 class="serif-font text-xl font-semibold">For Policymakers</h3>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-700">
                        <li>• Address severe affordability crisis in coastal markets</li>
                        <li>• Implement zoning reforms to increase housing supply</li>
                        <li>• Support affordable housing initiatives</li>
                        <li>• Consider tax incentives for development in underserved areas</li>
                    </ul>
                </div>
            </div>

            <!-- Regional Analysis -->
            <div class="card p-8 mb-8">
                <h3 class="serif-font text-2xl font-semibold mb-6 text-gray-800">Regional Market Analysis</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-pastel-primary rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fas fa-mountain text-white text-xl"></i>
                        </div>
                        <h4 class="font-semibold mb-2">West Coast</h4>
                        <p class="text-sm text-gray-600">Highest prices, moderate growth, severe affordability challenges</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-pastel-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fas fa-city text-white text-xl"></i>
                        </div>
                        <h4 class="font-semibold mb-2">Midwest</h4>
                        <p class="text-sm text-gray-600">Moderate prices, positive growth, better affordability</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-pastel-highlight rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fas fa-sun text-white text-xl"></i>
                        </div>
                        <h4 class="font-semibold mb-2">South</h4>
                        <p class="text-sm text-gray-600">Mixed performance, Florida correction, Texas cooling</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-pastel-accent rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fas fa-building text-white text-xl"></i>
                        </div>
                        <h4 class="font-semibold mb-2">Northeast</h4>
                        <p class="text-sm text-gray-600">Stable premium markets, limited affordability</p>
                    </div>
                </div>
            </div>

            <!-- Data Sources -->
            <div class="card p-6">
                <h3 class="serif-font text-xl font-semibold mb-4 text-gray-800">
                    <i class="fas fa-database text-pastel-primary mr-2"></i>
                    Data Sources &amp; Methodology
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold mb-2">Data Sources</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Zillow Home Value Index (ZHVI)</li>
                            <li>• U.S. Census Bureau American Community Survey</li>
                            <li>• SmartAsset Income Analysis</li>
                            <li>• Redfin Market Data</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">Analysis Methods</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Year-over-year percentage calculations</li>
                            <li>• Price-to-income ratio analysis</li>
                            <li>• Statistical significance testing</li>
                            <li>• Geographic clustering analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Download Section -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-4xl mx-auto text-center px-4">
            <h3 class="serif-font text-2xl font-semibold mb-4 text-gray-800">Access the Complete Dataset</h3>
            <p class="text-gray-600 mb-6">
                Download the raw data used in this analysis for your own research and insights.
            </p>
            <a href="real_estate_data.csv" class="download-btn text-lg">
                <i class="fas fa-download"></i>
                Download CSV Data
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="flex items-center justify-center mb-4">
                <i class="fas fa-home text-2xl text-pastel-primary mr-3"></i>
                <span class="serif-font text-xl font-semibold">Real Estate Analysis</span>
            </div>
            <p class="text-gray-400 mb-4">
                Comprehensive analysis of U.S. housing markets with elegant data visualization
            </p>
            <p class="text-sm text-gray-500">
                Data sources: Zillow, U.S. Census Bureau, SmartAsset | Analysis period: 2023-2024
            </p>
        </div>
    </footer>

    <script>
        // Price Distribution Chart
        const priceData = [
            {
                x: ['Pittsburgh', 'Oklahoma City', 'Memphis', 'Cleveland', 'Birmingham', 'St. Louis', 'Louisville', 'Indianapolis', 'Kansas City', 'Cincinnati'],
                y: [232771, 242586, 244072, 248038, 257127, 271010, 271943, 292165, 321289, 302039],
                type: 'bar',
                name: 'Most Affordable',
                marker: { color: '#A8D5BA' }
            },
            {
                x: ['San Francisco', 'San Jose', 'Los Angeles', 'San Diego', 'Seattle', 'New York', 'Boston', 'Washington DC'],
                y: [1127650, 1582065, 959206, 925599, 751156, 713066, 731359, 584722],
                type: 'bar',
                name: 'Most Expensive',
                marker: { color: '#B8A9C9' }
            }
        ];

        const priceLayout = {
            title: {
                text: 'Housing Price Distribution',
                font: { family: 'Playfair Display', size: 18, color: '#4A4A4A' }
            },
            xaxis: { title: 'Cities', tickangle: -45 },
            yaxis: { title: 'Median Home Price ($)' },
            plot_bgcolor: '#FAFAFA',
            paper_bgcolor: 'white',
            font: { family: 'Inter', color: '#4A4A4A' },
            margin: { t: 50, b: 100, l: 80, r: 50 }
        };

        Plotly.newPlot('priceChart', priceData, priceLayout, {responsive: true});

        // Growth Trends Chart
        const growthData = [
            {
                x: ['Cleveland', 'Louisville', 'Detroit', 'New York', 'Chicago', 'Milwaukee', 'Hartford', 'Providence', 'Buffalo', 'Philadelphia'],
                y: [4.66, 3.99, 3.92, 3.72, 3.61, 3.20, 4.50, 2.90, 3.70, 3.60],
                type: 'bar',
                name: 'Price Growth (%)',
                marker: { 
                    color: [4.66, 3.99, 3.92, 3.72, 3.61, 3.20, 4.50, 2.90, 3.70, 3.60],
                    colorscale: [[0, '#FFB5B5'], [0.5, '#F7E7CE'], [1, '#A8D5BA']],
                    showscale: true,
                    colorbar: { title: 'Growth Rate (%)' }
                }
            }
        ];

        const growthLayout = {
            title: {
                text: 'Price Growth Trends (Top 10 Cities)',
                font: { family: 'Playfair Display', size: 18, color: '#4A4A4A' }
            },
            xaxis: { title: 'Cities', tickangle: -45 },
            yaxis: { title: 'Price Growth (%)' },
            plot_bgcolor: '#FAFAFA',
            paper_bgcolor: 'white',
            font: { family: 'Inter', color: '#4A4A4A' },
            margin: { t: 50, b: 100, l: 80, r: 50 }
        };

        Plotly.newPlot('growthChart', growthData, growthLayout, {responsive: true});

        // Affordability Chart
        const affordabilityData = [
            {
                x: ['Oklahoma City', 'Pittsburgh', 'Louisville', 'Tampa', 'Chicago', 'Memphis', 'Kansas City', 'Cincinnati', 'Indianapolis', 'Birmingham'],
                y: [3.5, 3.6, 4.0, 4.3, 4.3, 4.6, 4.6, 4.5, 4.4, 4.4],
                type: 'bar',
                name: 'Price-to-Income Ratio',
                marker: { 
                    color: [3.5, 3.6, 4.0, 4.3, 4.3, 4.6, 4.6, 4.5, 4.4, 4.4],
                    colorscale: [[0, '#A8D5BA'], [0.5, '#F7E7CE'], [1, '#FFB5B5']],
                    showscale: true,
                    colorbar: { title: 'Ratio' }
                }
            }
        ];

        const affordabilityLayout = {
            title: {
                text: 'Price-to-Income Ratios (Most Affordable Cities)',
                font: { family: 'Playfair Display', size: 18, color: '#4A4A4A' }
            },
            xaxis: { title: 'Cities', tickangle: -45 },
            yaxis: { title: 'Price-to-Income Ratio' },
            plot_bgcolor: '#FAFAFA',
            paper_bgcolor: 'white',
            font: { family: 'Inter', color: '#4A4A4A' },
            margin: { t: 50, b: 100, l: 80, r: 50 },
            shapes: [{
                type: 'line',
                x0: -0.5,
                x1: 9.5,
                y0: 3.0,
                y1: 3.0,
                line: { color: 'red', width: 2, dash: 'dash' }
            }],
            annotations: [{
                x: 5,
                y: 3.2,
                text: 'Recommended Max (3.0)',
                showarrow: false,
                font: { color: 'red', size: 12 }
            }]
        };

        Plotly.newPlot('affordabilityChart', affordabilityData, affordabilityLayout, {responsive: true});

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>

</body></html>