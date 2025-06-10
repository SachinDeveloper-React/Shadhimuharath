type Community = {
  name: string;
  subCommunities: string[];
};

type Religion = {
  name: string;
  communities: Community[];
};

export const getCommunityOptions = (
  religionData: Religion[],
  selectedReligion: string,
): string[] => {
  const currentReligion = religionData.find(r => r.name === selectedReligion);
  return currentReligion?.communities.map(c => c.name) || [];
};

export const getSubCommunityOptions = (
  religionData: Religion[],
  selectedReligion: string,
  selectedCommunity: string,
): string[] => {
  const currentReligion = religionData.find(r => r.name === selectedReligion);
  const currentCommunity = currentReligion?.communities.find(
    c => c.name === selectedCommunity,
  );
  return currentCommunity?.subCommunities || [];
};
