'use client';

export function DaisyTest() {
    return (
        <div className="p-4 space-y-4">
            <h3 className="text-xl font-bold">DaisyUI Theme Test</h3>
            <div className="flex gap-2">
                <button className="btn btn-primary">Primary Button</button>
                <button className="btn btn-secondary">Secondary Button</button>
                <button className="btn btn-accent">Accent Button</button>
            </div>
            <div className="alert alert-info">
                <span>This is an info alert - should change colors with theme</span>
            </div>
            <div className="card bg-base-100 shadow-xl w-96">
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>This card should adapt to the selected theme</p>
                </div>
            </div>
        </div>
    );
}
