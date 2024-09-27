import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getUserDetails, UserDetails } from "./user-details"; // Adjust the import path accordingly

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      console.log("Retrieved token from localStorage:", token);

      if (token) {
        try {
          const details = await getUserDetails(token);
          console.log("User Details Fetched:", details);
          setUserDetails(details);
        } catch (error) {
          console.error("Failed to fetch user details", error);
        }
      } else {
        console.warn("Token not found in localStorage");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 rounded-full border border-white",
          className
        )}
        {...props}
        onClick={toggleDropdown} // Toggle dropdown on avatar click
      >
        {props.children}
      </AvatarPrimitive.Root>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black text-white shadow-lg">
          {userDetails ? (
            <div className="px-4 py-2">
              <p className="text-sm">{userDetails.email}</p>
            </div>
          ) : (
            <div className="px-4 py-2">Loading...</div>
          )}
          <div className="border-t border-gray-700">
            <a href="/orders" className="block px-4 py-2 hover:bg-gray-700">
              Orders
            </a>
            <a href="/signout" className="block px-4 py-2 hover:bg-gray-700">
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("rounded-full aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
