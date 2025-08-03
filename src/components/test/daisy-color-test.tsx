'use client';

export function DaisyColorTest() {
    return (
        <div className="p-4 space-y-6">
            <h3 className="text-2xl font-bold text-primary">DaisyUI + Tailwind Integration Test</h3>
            
            {/* DaisyUI Components (uses DaisyUI's built-in classes) */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-base-content">DaisyUI Components:</h4>
                <div className="flex flex-wrap gap-2">
                    <button className="btn btn-primary">Primary Button</button>
                    <button className="btn btn-secondary">Secondary Button</button>
                    <button className="btn btn-accent">Accent Button</button>
                    <button className="btn btn-neutral">Neutral Button</button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    <div className="badge badge-primary">Primary Badge</div>
                    <div className="badge badge-secondary">Secondary Badge</div>
                    <div className="badge badge-accent">Accent Badge</div>
                    <div className="badge badge-neutral">Neutral Badge</div>
                </div>
            </div>

            {/* Tailwind Classes with DaisyUI Theme Colors */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-base-content">Tailwind Classes with DaisyUI Colors:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-primary text-primary-content rounded-lg shadow-md">
                        <p className="font-semibold">bg-primary</p>
                        <p className="text-sm">text-primary-content</p>
                    </div>
                    <div className="p-4 bg-secondary text-secondary-content rounded-lg shadow-md">
                        <p className="font-semibold">bg-secondary</p>
                        <p className="text-sm">text-secondary-content</p>
                    </div>
                    <div className="p-4 bg-accent text-accent-content rounded-lg shadow-md">
                        <p className="font-semibold">bg-accent</p>
                        <p className="text-sm">text-accent-content</p>
                    </div>
                    <div className="p-4 bg-neutral text-neutral-content rounded-lg shadow-md">
                        <p className="font-semibold">bg-neutral</p>
                        <p className="text-sm">text-neutral-content</p>
                    </div>
                </div>
            </div>

            {/* Tailwind Utility Classes with Theme-aware Colors */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-base-content">Tailwind Utilities + Theme Colors:</h4>
                <div className="space-y-2">
                    <div className="w-full h-12 bg-base-100 border-2 border-primary flex items-center justify-center text-base-content rounded-md">
                        border-primary + bg-base-100
                    </div>
                    <div className="w-full h-12 bg-base-200 flex items-center justify-center text-primary font-bold rounded-md">
                        text-primary + bg-base-200
                    </div>
                    <div className="w-full h-12 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white rounded-md">
                        Gradient: from-primary to-secondary
                    </div>
                </div>
            </div>

            {/* DaisyUI Cards with Tailwind Layout */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-base-content">DaisyUI Cards + Tailwind Layout:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card bg-primary text-primary-content shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">DaisyUI Card</h2>
                            <p>This uses DaisyUI&apos;s card component with theme colors</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">Action</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-secondary text-secondary-content rounded-xl shadow-xl">
                        <h2 className="text-xl font-bold mb-2">Tailwind Card</h2>
                        <p className="mb-4">This uses Tailwind classes with DaisyUI theme colors</p>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 bg-accent text-accent-content rounded-lg hover:bg-accent-focus transition-colors">
                                Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
