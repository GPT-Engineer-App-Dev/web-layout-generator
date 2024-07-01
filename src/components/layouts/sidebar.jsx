import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Search,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Outlet } from "react-router-dom";

function SidebarLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr_220px] lg:grid-cols-[280px_1fr_280px]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Home className="h-6 w-6" />
              <span className="">Pansos</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">My Group</h2>
                <ul>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <Users className="h-4 w-4" />
                    Pickolab Studio
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <Users className="h-4 w-4" />
                    Aksantara Digital
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <Users className="h-4 w-4" />
                    Design Jam Indonesia
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <Users className="h-4 w-4" />
                    The Design Thinker
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Friends</h2>
                <ul>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Jelly Rmdn
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Ali Husni
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Kurnialm
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Syeh Fakeh
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Mindes Kridian
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Budi Doremi
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Zidanrio
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Keanu Satria
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Dhimas Rasyad
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Arvin Aradhana
                  </li>
                  <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                    <CircleUser className="h-4 w-4" />
                    Jamet Tmblng
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Home className="h-6 w-6" />
                  <span className="sr-only">Pansos</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <CircleUser className="h-5 w-5" />
                  Home
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <Input type="text" placeholder="Search..." className="w-full" />
          </div>
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
      <div className="hidden border-l bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <CircleUser className="h-6 w-6" />
              <span className="">Kemito</span>
            </a>
          </div>
          <div className="flex-1 p-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Profile</h2>
              <p>UI/UX Designer</p>
              <p>11K Followers</p>
              <p>1.4K Following</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Latest Activity</h2>
              <ul>
                <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                  <CircleUser className="h-4 w-4" />
                  arizidanrio, kurianmdj, and 78 others liked your post
                </li>
                <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                  <CircleUser className="h-4 w-4" />
                  uibucket tagged you in a post
                </li>
                <li className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary">
                  <CircleUser className="h-4 w-4" />
                  Jelly started following you
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;