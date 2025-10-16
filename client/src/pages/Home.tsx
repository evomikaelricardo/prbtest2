import { useState } from "react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import FacilityIcon from "@/components/FacilityIcon";
import PropertyInfoCard from "@/components/PropertyInfoCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import PromoCarousel from "@/components/PromoCarousel";
import BottomNav from "@/components/BottomNav";
import { 
  FileText, 
  Users, 
  Package, 
  Headphones, 
  Grid3x3,
  Wrench,
  Sparkles,
  Calendar,
  CreditCard as CardIcon,
  TruckIcon,
  Home as HomeIcon,
  BookOpen,
  AlertTriangle,
  Building
} from "lucide-react";

// Import generated promo images
import poolImage from '@assets/generated_images/Luxury_apartment_pool_amenity_a3ade158.png';
import gymImage from '@assets/generated_images/Luxury_apartment_fitness_center_4e7de1d8.png';
import loungeImage from '@assets/generated_images/Premium_co-working_lounge_space_16ab311d.png';

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  // todo: remove mock functionality
  const promoImages = [poolImage, gymImage, loungeImage];

  // todo: remove mock functionality
  const announcements = [
    { title: "Penutupan akses utama sementara", date: "13 May 2025" },
    { title: "Gym maintenance scheduled", date: "15 May 2025" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header tenantName="Syahrul Hajji" unitInfo="Garden Ville Apartment, Camelia 1..." />
      
      <div className="px-4 -mt-16 relative z-10">
        <div className="bg-card rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <ServiceCard
              icon={FileText}
              label="Make Request"
              iconBgColor="bg-blue-100 dark:bg-blue-900/30"
              iconColor="text-blue-600 dark:text-blue-400"
            />
            <ServiceCard
              icon={Users}
              label="Manage Visitor"
              iconBgColor="bg-purple-100 dark:bg-purple-900/30"
              iconColor="text-purple-600 dark:text-purple-400"
            />
            <ServiceCard
              icon={Package}
              label="Manage Parcel"
              iconBgColor="bg-orange-100 dark:bg-orange-900/30"
              iconColor="text-orange-600 dark:text-orange-400"
            />
            <ServiceCard
              icon={Headphones}
              label="Report to Helpdesk"
              iconBgColor="bg-green-100 dark:bg-green-900/30"
              iconColor="text-green-600 dark:text-green-400"
            />
            <ServiceCard
              icon={Grid3x3}
              label="Services"
              iconBgColor="bg-pink-100 dark:bg-pink-900/30"
              iconColor="text-pink-600 dark:text-pink-400"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            <FacilityIcon
              icon={Wrench}
              label="Engineering"
              iconBgColor="bg-cyan-100 dark:bg-cyan-900/30"
              iconColor="text-cyan-600 dark:text-cyan-400"
            />
            <FacilityIcon
              icon={Sparkles}
              label="Housekeeping"
              iconBgColor="bg-indigo-100 dark:bg-indigo-900/30"
              iconColor="text-indigo-600 dark:text-indigo-400"
            />
            <FacilityIcon
              icon={Calendar}
              label="Facility Booking"
              iconBgColor="bg-teal-100 dark:bg-teal-900/30"
              iconColor="text-teal-600 dark:text-teal-400"
            />
            <FacilityIcon
              icon={CardIcon}
              label="Access Card"
              iconBgColor="bg-amber-100 dark:bg-amber-900/30"
              iconColor="text-amber-600 dark:text-amber-400"
            />
            <FacilityIcon
              icon={TruckIcon}
              label="Loading Unloading"
              iconBgColor="bg-rose-100 dark:bg-rose-900/30"
              iconColor="text-rose-600 dark:text-rose-400"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold font-heading mb-4">My Property Info</h2>
          <div className="grid grid-cols-2 gap-3">
            <PropertyInfoCard
              icon={HomeIcon}
              title="About Property"
              borderColor="border-l-blue-500"
            />
            <PropertyInfoCard
              icon={BookOpen}
              title="House Rule"
              borderColor="border-l-green-500"
            />
            <PropertyInfoCard
              icon={AlertTriangle}
              title="Emergency Procedure"
              borderColor="border-l-orange-500"
            />
            <PropertyInfoCard
              icon={Building}
              title="Facilities"
              borderColor="border-l-purple-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold font-heading">Announcement</h2>
            <button 
              data-testid="button-see-all-announcements"
              className="text-sm text-primary font-medium hover-elevate active-elevate-2 px-2 py-1 rounded"
              onClick={() => console.log('See all announcements')}
            >
              See All
            </button>
          </div>
          <div className="space-y-3">
            {announcements.map((announcement, index) => (
              <AnnouncementCard
                key={index}
                title={announcement.title}
                date={announcement.date}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold font-heading mb-4">Promo & Highlight</h2>
          <PromoCarousel images={promoImages} />
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
