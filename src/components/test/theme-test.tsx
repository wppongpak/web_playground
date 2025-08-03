'use client';

export function ThemeTest() {
    return (
        <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary">DaisyUI Theme Test</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Primary colors */}
                <div className="card card-compact bg-primary text-primary-content shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title">Primary</h3>
                        <p>Primary color theme</p>
                    </div>
                </div>

                {/* Secondary colors */}
                <div className="card card-compact bg-secondary text-secondary-content shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title">Secondary</h3>
                        <p>Secondary color theme</p>
                    </div>
                </div>

                {/* Accent colors */}
                <div className="card card-compact bg-accent text-accent-content shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title">Accent</h3>
                        <p>Accent color theme</p>
                    </div>
                </div>

                {/* Neutral colors */}
                <div className="card card-compact bg-neutral text-neutral-content shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title">Neutral</h3>
                        <p>Neutral color theme</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <button className="btn btn-primary">Primary Button</button>
                <button className="btn btn-secondary">Secondary Button</button>
                <button className="btn btn-accent">Accent Button</button>
                <button className="btn btn-neutral">Neutral Button</button>
            </div>

            <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>This component tests DaisyUI theme colors. Switch themes to see colors change!</span>
            </div>

            <div className="flex flex-wrap gap-2">
                <div className="badge badge-primary badge-lg">Primary Badge</div>
                <div className="badge badge-secondary badge-lg">Secondary Badge</div>
                <div className="badge badge-accent badge-lg">Accent Badge</div>
                <div className="badge badge-neutral badge-lg">Neutral Badge</div>
            </div>
        </div>
    );
}
