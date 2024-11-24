import {createAsync, Route, type RouteDefinition, Router} from "@solidjs/router";
import { getUser, logout } from "~/lib";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {lazy} from "solid-js";

const Home = lazy(() => import('../pages/Home'));
const Categories = lazy(() => import('../pages/Categories'));
const Transactions = lazy(() => import('../pages/Transactions'));
const Analytics = lazy(() => import('../pages/Analytics'));
const Profile = lazy(() => import('../pages/Profile'));

export default function AppRoutes() {
    return (
        <div class="min-h-screen flex flex-col">
            <Header />
            <main class="flex-grow">
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/transactions" component={Transactions} />
                    <Route path="/analytics" component={Analytics} />
                    <Route path="/profile" component={Profile} />
                </Router>
            </main>
            <Footer />
        </div>
    );
}
