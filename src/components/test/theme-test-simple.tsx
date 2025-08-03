'use client';

export function ThemeTestSimple() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">Theme Test</h2>
                <p className="text-base-content">
                    If themes are working, this card should change colors when you switch themes.
                </p>
                <div className="flex gap-2 mt-4">
                    <div className="badge badge-primary">Primary</div>
                    <div className="badge badge-secondary">Secondary</div>
                    <div className="badge badge-accent">Accent</div>
                </div>
                <div className="flex gap-2 mt-2">
                    <button className="btn btn-primary btn-sm">Primary</button>
                    <button className="btn btn-secondary btn-sm">Secondary</button>
                    <button className="btn btn-accent btn-sm">Accent</button>
                </div>
                <div className="bg-base-200 p-4 rounded mt-4">
                    <p className="text-base-content">Base-200 background</p>
                </div>
            </div>
        </div>
    );
}
