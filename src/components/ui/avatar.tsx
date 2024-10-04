import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { jwtDecode } from "jwt-decode";

// Define the structure of the decoded token
interface DecodedToken {
  email: string;
  name?: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<DecodedToken | null>(null);
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

  // Decode token and set user details
  // useEffect(() => {
  //   getToken();
  // }, []);

  const getToken = () => {
    const token = localStorage.getItem("my-token");

    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        setUserDetails(decodedToken);
      } catch (error) {
        console.error("Failed to decode the token", error);
      }
    } else {
      console.warn("Token not found in localStorage");
    }
  };
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
              <p className="text-sm">Email: {userDetails.email}</p>
            </div>
          ) : (
            <div className="px-4 py-2">kainat</div>
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

// AvatarImage component
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

// AvatarFallback component
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
