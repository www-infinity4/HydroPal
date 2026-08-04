import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <div class="brand-lockup">
        <div class="brand-mark">HP</div>
        <div>
          <p class="eyebrow">HydroPal</p>
          <p class="microcopy">Water intelligence for resilient infrastructure</p>
        </div>
      </div>
      <nav class="topnav" aria-label="Primary">
        <a href="#science">Science</a>
        <a href="#engineering">Engineering</a>
        <a href="#tools">Tools</a>
        <a href="#command-center">Command Center</a>
      </nav>
    </header>

    <main>
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="section-tag">Hydrology + engineering + decision support</p>
          <h1>Build smarter water systems with HydroPal.</h1>
          <p class="hero-text">
            HydroPal is a concept platform for understanding watershed dynamics, tracking
            infrastructure performance, and turning hydro science into operational action.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#command-center">Explore the system</a>
            <a class="button button-secondary" href="#science">See the science</a>
          </div>
          <ul class="hero-stats" aria-label="Key metrics">
            <li><strong>94%</strong><span>forecast confidence on modeled inflow bands</span></li>
            <li><strong>17</strong><span>engineering layers from source to distribution</span></li>
            <li><strong>24/7</strong><span>decision visibility across flow, storage, and energy</span></li>
          </ul>
        </div>

        <div class="hero-visual" aria-label="HydroPal system overview graphic">
          <div class="orbital-grid"></div>
          <div class="core-card glass">
            <div class="core-header">
              <span>Hydro intelligence mesh</span>
              <span class="status-pill">Live model</span>
            </div>
            <div class="core-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
              <div class="core-node">Reservoir<br/>brain</div>
            </div>
            <div class="signal signal-a"></div>
            <div class="signal signal-b"></div>
            <div class="signal signal-c"></div>
          </div>
          <div class="floating-card glass floating-card-a">
            <span class="card-label">Watershed balance</span>
            <strong>+12.4 mm</strong>
            <p>Net daily catchment gain after evapotranspiration.</p>
          </div>
          <div class="floating-card glass floating-card-b">
            <span class="card-label">Pump optimization</span>
            <strong>18% less energy</strong>
            <p>Dispatch aligned with storage head and time-of-use pricing.</p>
          </div>
        </div>
      </section>

      <section class="metrics-band">
        <article>
          <p class="metric-kicker">Hydrologic cycle</p>
          <h2>Track precipitation, runoff, recharge, and demand in one operating picture.</h2>
        </article>
        <div class="metric-grid">
          <div class="metric-card glass">
            <span>Snowpack to streamflow conversion</span>
            <strong>0.71</strong>
            <p>Modeled seasonal runoff coefficient using terrain and temperature constraints.</p>
          </div>
          <div class="metric-card glass">
            <span>Leakage detection latency</span>
            <strong>11 min</strong>
            <p>Cross-checking pressure decay, meter variance, and district demand anomalies.</p>
          </div>
          <div class="metric-card glass">
            <span>Water quality margin</span>
            <strong>99.2%</strong>
            <p>Compliance coverage across turbidity, residual disinfectant, and pH control.</p>
          </div>
        </div>
      </section>

      <section class="content-section" id="science">
        <div class="section-heading">
          <p class="section-tag">Real science</p>
          <h2>The physics behind every drop.</h2>
          <p>
            HydroPal is grounded in the water cycle: solar forcing drives evaporation,
            condensation returns water as precipitation, landscapes partition flow into runoff,
            infiltration, and groundwater recharge, and infrastructure reshapes timing,
            storage, and delivery.
          </p>
        </div>
        <div class="science-layout">
          <article class="science-card glass">
            <h3>Catchment dynamics</h3>
            <p>
              Basin response depends on slope, land cover, soil permeability, antecedent moisture,
              and storm intensity. HydroPal frames these controls as operational signals for flood
              risk, reservoir refill, and recharge potential.
            </p>
            <ul>
              <li>Infiltration limits change with compaction, texture, and saturation.</li>
              <li>Hydrographs reveal lag time, peak discharge, and recession behavior.</li>
              <li>Baseflow indicates groundwater contribution and dry-period resilience.</li>
            </ul>
          </article>
          <article class="science-card glass chart-card">
            <div class="chart-header">
              <div>
                <p class="card-label">Storm response profile</p>
                <h3>Hydrograph and rainfall intensity</h3>
              </div>
              <span class="status-pill subtle">Modeled event</span>
            </div>
            <div class="chart-frame" aria-hidden="true">
              <div class="chart-grid"></div>
              <div class="rain-bars">
                <span style="--h: 32%"></span>
                <span style="--h: 58%"></span>
                <span style="--h: 82%"></span>
                <span style="--h: 66%"></span>
                <span style="--h: 44%"></span>
                <span style="--h: 28%"></span>
              </div>
              <svg viewBox="0 0 420 220" class="flow-line" role="img" aria-label="Hydrograph curve">
                <path d="M10 190 C60 188, 100 180, 130 154 S180 70, 220 64 S285 92, 320 130 S380 178, 410 188"></path>
              </svg>
            </div>
            <div class="chart-legend">
              <span><i class="legend-swatch rain"></i>Rainfall intensity</span>
              <span><i class="legend-swatch flow"></i>Discharge response</span>
            </div>
          </article>
        </div>
      </section>

      <section class="content-section engineering-section" id="engineering">
        <div class="section-heading narrow">
          <p class="section-tag">Engineering systems</p>
          <h2>Designed for real infrastructure, not abstract dashboards.</h2>
        </div>
        <div class="systems-grid">
          <article class="system-card glass">
            <h3>Source water</h3>
            <p>Reservoirs, intakes, aquifers, and river diversions linked to storage curves and inflow forecasts.</p>
          </article>
          <article class="system-card glass">
            <h3>Treatment</h3>
            <p>Optimization across coagulation, filtration, UV/disinfection, and quality compliance envelopes.</p>
          </article>
          <article class="system-card glass">
            <h3>Distribution</h3>
            <p>Pressure zones, pump schedules, district metering, and leakage diagnostics for resilient delivery.</p>
          </article>
          <article class="system-card glass">
            <h3>Energy coupling</h3>
            <p>Water and power co-optimization using storage head, tariff windows, and flexible pumping strategies.</p>
          </article>
        </div>
        <div class="flow-diagram glass" aria-label="Engineering flow diagram">
          <div class="flow-node">Precipitation</div>
          <div class="flow-arrow"></div>
          <div class="flow-node">Watershed</div>
          <div class="flow-arrow"></div>
          <div class="flow-node">Storage</div>
          <div class="flow-arrow"></div>
          <div class="flow-node">Treatment</div>
          <div class="flow-arrow"></div>
          <div class="flow-node">Distribution</div>
          <div class="flow-arrow"></div>
          <div class="flow-node">Demand + Reuse</div>
        </div>
      </section>

      <section class="content-section tools-section" id="tools">
        <div class="section-heading">
          <p class="section-tag">Tools</p>
          <h2>An operations stack for hydro teams.</h2>
          <p>
            The concept combines environmental sensing, analytics, and planning tools so engineers,
            utilities, and resilience teams can move from monitoring to decisions.
          </p>
        </div>
        <div class="tools-layout">
          <article class="tool-panel glass">
            <h3>Core toolset</h3>
            <ul class="feature-list">
              <li>Reservoir storage forecasting with confidence bands</li>
              <li>Pipe network anomaly detection and pressure-watch alerts</li>
              <li>Demand shaping with conservation and tariff overlays</li>
              <li>Climate stress testing for drought and extreme precipitation</li>
              <li>Asset prioritization across valves, pumps, and treatment units</li>
            </ul>
          </article>
          <article class="tool-panel glass command-center" id="command-center">
            <div class="chart-header">
              <div>
                <p class="card-label">Command center</p>
                <h3>Operational readiness index</h3>
              </div>
              <span class="status-pill">Stable</span>
            </div>
            <div class="bar-stack" aria-hidden="true">
              <div><span>Hydrology</span><strong>88</strong><em style="--score: 88%"></em></div>
              <div><span>Storage</span><strong>76</strong><em style="--score: 76%"></em></div>
              <div><span>Water quality</span><strong>93</strong><em style="--score: 93%"></em></div>
              <div><span>Energy efficiency</span><strong>81</strong><em style="--score: 81%"></em></div>
            </div>
            <p class="command-note">
              Readiness is synthesized from hydrologic observations, system capacity, process health,
              and operating flexibility.
            </p>
          </article>
        </div>
      </section>
    </main>
  </div>
`
