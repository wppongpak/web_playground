import { GraphQLExample } from '@/components/examples';
import { ThemeShowcase, DaisyTest, ThemeTest, DaisyColorTest, ThemeTestSimple } from '@/components/test';
import { ProtectedRoute } from '@/components/layout';

export default function Home() {
    return (
        <ProtectedRoute>
            <div className="space-y-8">
                <ThemeTestSimple />
                <DaisyColorTest />
                <ThemeTest />
                <DaisyTest />
                <GraphQLExample />
                <ThemeShowcase />
            </div>
        </ProtectedRoute>
    );
}
